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

export function SidePanel() {
  return (
    <div className="text-white h-screen w-[6rem] md:flex flex-col items-center py-10 gap-14 hidden">
      <div className="p-3 rounded-full bg-red-800 text-white">
        <FilmIcon />
      </div>
      <section className="space-y-12">
        <Search className="hover:text-gray-400 cursor-pointer w-8 h-8" />
        <Home className="hover:text-gray-400 cursor-pointer border-b-4 border-red-600 pb-1 w-8 h-8" />
        <Video className="hover:text-gray-400 cursor-pointer w-8 h-8" />
        <Tv className="hover:text-gray-400 cursor-pointer w-8 h-8" />
        <TrendingUp className="hover:text-gray-400 cursor-pointer w-8 h-8" />
        <Plus className="hover:text-gray-400 cursor-pointer w-8 h-8" />
        <Shuffle className="hover:text-gray-400 cursor-pointer w-8 h-8" />
      </section>
      <div className="p-2 rounded-full border-2 border-white text-white mt-auto">
        <User />
      </div>
    </div>
  );
}
