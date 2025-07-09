import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 600; // ISR 10 minutes

type Video = {
  id: string;
  title: string;
  thumbnail: string;
};

async function fetchLatestVideos(): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? 'UCItZYATL__rXqGXIhN3kLBQ';

  if (!apiKey) {
    console.warn('Missing YOUTUBE_API_KEY env var');
    return [];
  }

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=8`,
    {
      // Next.js extended fetch options
      next: { revalidate: 600 },
    } as any
  );

  if (!res.ok) {
    console.error('YouTube API request failed', res.status);
    return [];
  }

  const json = await res.json();

  return json.items
    .filter((item: any) => item.id.kind === 'youtube#video')
    .map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
}

export default async function Home() {
  const videos = await fetchLatestVideos();
  const hero = videos[0];

  return (
    <section className="space-y-12">
      {hero && (
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${hero.id}`}
            title={hero.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      <h2 className="text-2xl font-semibold">최신 영상</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <li key={video.id}>
            <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" className="block group">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={480}
                height={270}
                className="w-full rounded-lg group-hover:opacity-90"
              />
              <p className="mt-2 text-sm line-clamp-2">{video.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}