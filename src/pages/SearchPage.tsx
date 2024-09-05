import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { API_KEY, Movie } from "../lib/globals";
import axios from "axios";
import Loading from "../components/Loading";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query"); // Retrieve the 'query' query parameter
  const navigate = useNavigate(); // Hook for programmatic navigation

  const [search, setSearch] = useState(query || "Avengers");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      setLoading(true);
      try {
        const movies = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
        );
        setMovies(movies.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [search]);

  const handleMovieClick = (id: number) => {
    navigate(`/movie?id=${id}`);
  };

  return (
    <main className="min-h-screen p-10 pt-[140px]">
      <section className="flex gap-4 mb-10">
        <h1 className="text-2xl">Search</h1>
        <input
          className="bg-none outline-none bg-inherit border-b-2"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      {loading && <Loading />}
      <section className="flex flex-wrap gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 h-[400px] w-[280px] cursor-pointer"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
