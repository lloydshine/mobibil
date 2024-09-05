import { Outlet } from "react-router-dom";
import { SidePanel } from "../components/SidePanel";

export default function HomeLayout() {
  return (
    <main className="bg-black h-screen flex">
      <SidePanel />
      <section className="flex-1 text-white max-h-screen overflow-y-auto scrollbar-hidden">
        <Outlet />
      </section>
    </main>
  );
}
