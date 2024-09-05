export const API_KEY = import.meta.env.VITE_API_KEY;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Video {
  iso_639_1: string; // Language code (ISO 639-1)
  iso_3166_1: string; // Country code (ISO 3166-1)
  name: string; // Name of the video
  key: string; // YouTube video key
  site: string; // Video hosting site (e.g., YouTube)
  size: number; // Video resolution size (e.g., 1080 for 1080p)
  type: "Trailer" | "Teaser" | "Featurette" | "Clip" | "Behind the Scenes"; // Type of video
  official: boolean; // Whether the video is official
  published_at: string; // Date of publishing in ISO 8601 format
  id: string; // Unique ID for the video
}
