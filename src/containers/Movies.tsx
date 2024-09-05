import { useEffect, useState } from "react";
import { Movie } from "../lib/globals";
import axios from "axios";
import { MovieList } from "../components/MovieList";
import Loading from "../components/Loading";

export function Movies({
  title,
  api,
  handleSelect,
}: {
  title: string;
  api: string;
  handleSelect: (movie: Movie | null) => void;
}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(api);
        setMovies(response.data.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error); // Handle AxiosError specifically if needed
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (error) return <>Error: {error.message}</>;
  return (
    <section className="p-5">
      {loading && <Loading />}
      <h1 className="text-2xl font-semibold mb-5">{title}</h1>
      <MovieList movies={movies} handleSelect={handleSelect} />
    </section>
  );
}
