import { FilmIcon, MenuIcon, User } from "lucide-react";

export function TopNav() {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full px-6 py-4 bg-black/60 backdrop-blur-lg md:hidden flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full bg-red-800 text-white">
          <FilmIcon />
        </div>
        <h1 className="font-semibold text-white">Mobibi</h1>
      </div>
      <div className="flex items-center gap-4">
        <MenuIcon className="text-white" />
        <div className="p-1 rounded-full border-2 border-white text-white mt-auto">
          <User />
        </div>
      </div>
    </nav>
  );
}
