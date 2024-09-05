import { PlayIcon, PlusCircleIcon, StarIcon } from "lucide-react";
import { Movie } from "../lib/globals";

export default function Featured({ movie }: { movie: Movie }) {
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <section
      className="h-[50rem] w-full bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.389), rgba(0, 0, 0, 0.973)), url(${backdropUrl})`,
      }}
    >
      <div className="md:p-20 p-4 space-y-4">
        <h1 className="md:text-6xl text-3xl">{movie.original_title}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <StarIcon />
            <p className="font-black">{movie.popularity}</p>
          </div>
          <p className="text-white/50">{movie.release_date}</p>
          <p className="text-white/50">3h 1m</p>
          <div className="h-5 w-[0.9px] bg-white/20"></div>
          <p>Sci-Fi</p>
          <p>Action</p>
          <p>Bold</p>
          <div className="bg-black py-1 px-3 rounded-full">
            <h1 className="font-semibold text-sm">1080p</h1>
          </div>
        </div>
        <p className="md:w-[40rem] w-[20rem] text-white/50 pb-5">
          {movie.overview}
        </p>
        <div className="flex items-center gap-8">
          <button className="py-3 px-6 rounded-lg flex items-center gap-2 border-white border-2">
            <PlayIcon />
            Watch Movie
          </button>
          <button className="py-3 px-6 rounded-lg flex items-center gap-2 border-white border-2">
            <PlusCircleIcon />
            Favorite
          </button>
        </div>
      </div>
    </section>
  );
}
