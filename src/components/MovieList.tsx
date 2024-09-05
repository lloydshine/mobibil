import { Movie } from "../lib/globals";

export function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <section className="my-10 space-y-10 px-4">
      <h1 className="text-2xl font-bold">Popular</h1>
      <section className="flex gap-4 max-w-full w-full overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 h-[400px] w-[250px]">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
