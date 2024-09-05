import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/search" element={<SearchPage />} />.
        <Route path="/movie" element={<MoviePage />} />
      </Route>
    </Routes>
  );
}
