import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Movies } from "../containers/Movies";
import { API_KEY } from "../lib/globals";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the 'id' query parameter
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (id) {
      const url = `https://multiembed.mov/?video_id=${id}&tmdb=1`;
      setVideoUrl(url);
    }
  }, [id]);

  return (
    <main>
      <iframe
        className="w-full h-screen"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media; "
      ></iframe>
      <Movies
        title="Similar"
        api={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`}
        handleSelect={() => function () {}}
      />
    </main>
  );
}
