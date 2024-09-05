import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, Movie } from "../lib/globals";
import axios from "axios";
import Loading from "../components/Loading";
import { Movies } from "../containers/Movies";
import { PlayCircleIcon } from "lucide-react";

export default function MoviePage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the 'id' query parameter

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(movie.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

  return (
    <main className="min-h-screen">
      {loading && <Loading />}
      <section
        className="h-[40rem] w-full bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.389), rgba(0, 0, 0, 0.973)), url(${backdropUrl})`,
        }}
      >
        <div className="p-10">
          <h1 className="text-4xl font-bold">{movie?.original_title}</h1>
        </div>
      </section>
      <section className="p-10 space-y-10">
        <div>
          <p className="text-lg pb-2">Overview</p>
          <p className="text-white/60">{movie?.overview}</p>
        </div>
        <div className="flex items-center gap-8">
          <button className="py-3 px-6 rounded-lg flex items-center gap-2 border-white border-2">
            <PlayCircleIcon />
            <a href={`/watch?id=${movie?.id}`}>Watch Now</a>
          </button>
        </div>
      </section>
      <Movies
        title="Similar"
        api={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`}
        handleSelect={() => function () {}}
      />
    </main>
  );
}
