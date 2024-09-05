import { PlayCircleIcon, X } from "lucide-react";
import { Movie, Video } from "../lib/globals";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../lib/globals";

export default function MovieModal({
  movie,
  handleSelect,
}: {
  movie: Movie;
  handleSelect: (movie: Movie | null) => void;
}) {
  const [trailer, setTrailer] = useState<Video>();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videos =
          await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US
`);
        const trailer: Video = videos.data.results.find(
          (video: Video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailer(trailer);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, [movie.id]);

  return (
    <div className="z-50 absolute w-full h-screen top-0 left-0 bg-black/80 flex items-center justify-center p-10">
      <div className="bg-black rounded-xl overflow-hidden shadow-lg w-full md:w-[65%] max-h-full overflow-y-auto p-8 space-y-4">
        <div className="w-full flex justify-end">
          <X
            className="cursor-pointer text-white"
            onClick={() => handleSelect(null)}
          />
        </div>
        <div className="relative w-full h-[400px] overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-10 space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{movie.original_title}</h1>
            <p>
              {movie.release_date} {movie.id}
            </p>
          </div>
          <div>
            <p>Overview</p>
            <p className="text-white/60">{movie.overview}</p>
          </div>
          <div className="w-full">
            <button className="py-3 px-6 rounded-lg flex items-center gap-2 border-white border-2">
              <PlayCircleIcon />
              <a href={`/watch?id=${movie.id}`}>Watch Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
