import { ChevronRightCircle, PlayCircleIcon, StarIcon } from "lucide-react";
import { API_KEY, Movie } from "../lib/globals";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Featured() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
`
        );
        setMovie(response.data.results[1]);
      } catch (error) {
        console.error("Error fetching the top movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopMovie();
  }, []);

  if (!movie)
    return (
      <section className="h-[50rem] w-full">
        <Loading />
      </section>
    );

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <section
      className="h-[50rem] w-full bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.389), rgba(0, 0, 0, 0.973)), url(${backdropUrl})`,
      }}
    >
      {loading && <Loading />}
      <div className="md:p-20 p-10 space-y-4">
        <h1 className="md:text-6xl text-3xl">{movie.original_title}</h1>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <StarIcon />
              <p className="font-black">{movie.popularity}</p>
            </div>
            <p className="text-white/50">{movie.release_date}</p>
            <p className="text-white/50">3h 1m</p>
          </div>
          <div className="h-5 w-[0.9px] bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <p>Sci-Fi</p>
            <p>Action</p>
            <p>Bold</p>
            <div className="bg-black py-1 px-3 rounded-full">
              <h1 className="font-semibold text-sm">1080p</h1>
            </div>
          </div>
        </div>
        <p className="md:w-[40rem] w-[20rem] text-white/50 pb-5">
          {movie.overview}
        </p>
        <div className="flex items-center gap-8">
          <button className="py-3 px-6 rounded-lg flex items-center gap-2 border-white border-2">
            <PlayCircleIcon />
            <a href={`/watch?id=${movie.id}`}>Watch Now</a>
          </button>
          <button className="py-3 px-6 rounded-lg flex items-center gap-2 border-white border-2">
            <ChevronRightCircle />
            <a href={`/movie?id=${movie.id}`}>Visit</a>
          </button>
        </div>
      </div>
    </section>
  );
}
