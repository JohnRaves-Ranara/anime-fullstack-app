import { EpisodeChunk, EpisodeToBeRendered } from "../types/animeAnilist";

export function chunkEpisodes(
  eps: EpisodeToBeRendered[],
  epsPerChunk: number
): EpisodeChunk[] {
  const chunkedEpisodes = Array.from(
    { length: Math.ceil(eps.length / epsPerChunk) },
    (_, i) => {
      const start = i * epsPerChunk + 1;
      const end = Math.min((i + 1) * epsPerChunk, eps.length);
      return {
        startEp: start,
        endEp: end,
        episodes: eps.slice(i * epsPerChunk, (i + 1) * epsPerChunk),
      };
    }
  );
  return chunkedEpisodes;
}
