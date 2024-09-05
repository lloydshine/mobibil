import {
  Home,
  Search,
  Video,
  Tv,
  TrendingUp,
  Plus,
  Shuffle,
  FilmIcon,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function SidePanel() {
  const location = useLocation();
  const { pathname } = location;

  const getLinkClass = (path: string) =>
    `hover:text-gray-400 cursor-pointer w-6 h-6 ${
      pathname === path ? "text-red-800" : ""
    }`;
  return (
    <div className="text-white h-screen w-[4rem] md:flex flex-col items-center py-10 gap-14 hidden">
      <div className="p-3 rounded-full bg-red-800 text-white">
        <FilmIcon />
      </div>
      <section className="space-y-12">
        <div className="flex items-center">
          <Link to="/search" className={getLinkClass("/search")}>
            <Search className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className={getLinkClass("/")}>
            <Home className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className={getLinkClass("/videos")}>
            <Video className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className={getLinkClass("/tv-shows")}>
            <Tv className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className={getLinkClass("/trending")}>
            <TrendingUp className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className={getLinkClass("/add")}>
            <Plus className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className={getLinkClass("/shuffle")}>
            <Shuffle className="w-6 h-6" />
          </Link>
        </div>
      </section>
      <div className="p-2 rounded-full border-2 border-white text-white mt-auto">
        <User />
      </div>
    </div>
  );
}
