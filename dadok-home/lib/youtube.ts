export type Video = {
  id: string;
  title: string;
  thumbnail: string;
};

const API_BASE = 'https://www.googleapis.com/youtube/v3';

/**
 * Fetch latest videos from a YouTube channel via Data API v3.
 * @param maxResults Maximum number of videos to return (default 8)
 * @param options Optional settings
 */
export async function getLatestVideos(
  maxResults = 8,
  options: { cacheSeconds?: number } = {}
): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? 'UCItZYATL__rXqGXIhN3kLBQ';

  if (!apiKey) throw new Error('Missing YOUTUBE_API_KEY environment variable');

  const url = `${API_BASE}/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&type=video&maxResults=${maxResults}`;

  const res = await fetch(url, {
    // Next.js extended fetch options: cache & revalidate
    next: { revalidate: options.cacheSeconds ?? 600 },
  } as any);

  if (!res.ok) {
    throw new Error(`YouTube API error: ${res.status}`);
  }

  const json = await res.json();

  return json.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
  }));
}