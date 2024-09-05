import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, Movie } from "../lib/globals";
import axios from "axios";
import Loading from "../components/Loading";

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
    <main className="h-screen">
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
    </main>
  );
}
