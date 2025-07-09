import Image from 'next/image';
import Link from 'next/link';
import { getLatestVideos, Video } from '@/lib/youtube';

export const revalidate = 600; // ISR 10 minutes

export default async function Home() {
  let videos: Video[] = [];
  try {
    videos = await getLatestVideos(8, { cacheSeconds: 600 });
  } catch (err) {
    console.error(err);
  }
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