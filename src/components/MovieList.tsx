import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { Movie } from "../lib/globals";
import { useRef } from "react";

export function MovieList({
  movies,
  handleSelect,
}: {
  movies: Movie[];
  handleSelect: (movie: Movie | null) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust the scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust the scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 z-10"
      >
        <ChevronLeftCircle />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 z-10"
      >
        <ChevronRightCircle />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 max-w-full w-full overflow-x-auto scrollbar-hidden scroll-smooth"
      >
        <div className="flex gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 h-[400px] w-[280px] cursor-pointer"
              onClick={() => handleSelect(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
