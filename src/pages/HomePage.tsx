import { useState } from "react";
import { API_KEY, Movie } from "../lib/globals";
import Featured from "../components/Featured";
import { Movies } from "../containers/Movies";
import MovieModal from "../components/MovieModal";

export default function HomePage() {
  const [selected, setSelected] = useState<Movie | null>(null);

  const handleSelect = (movie: Movie | null) => {
    setSelected(movie);
  };

  return (
    <main>
      {selected && <MovieModal movie={selected} handleSelect={handleSelect} />}
      <Featured />
      <Movies
        title="Popular"
        api={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
`}
        handleSelect={handleSelect}
      />
      <Movies
        title="Upcoming"
        api={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`}
        handleSelect={handleSelect}
      />
      <Movies
        title="Top Rated"
        api={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`}
        handleSelect={handleSelect}
      />
    </main>
  );
}
