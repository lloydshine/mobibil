import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, Movie } from "../lib/globals";
import Featured from "../components/Featured";
import { MovieList } from "../components/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching the top movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopMovie();
  }, []);

  if (loading) return <>Loading</>;

  return (
    <main>
      <Featured movie={movies[0]} />
      <MovieList movies={movies} />
    </main>
  );
}
