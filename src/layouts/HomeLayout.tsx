import { Outlet } from "react-router-dom";
import { SidePanel } from "../components/SidePanel";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";

export default function HomeLayout() {
  return (
    <main className="bg-black h-screen flex">
      <TopNav />
      <SidePanel />
      <section className="flex-1 bg-[#070707] text-white max-h-screen overflow-y-auto scrollbar-hidden">
        <Outlet />
        <Footer />
      </section>
    </main>
  );
}
