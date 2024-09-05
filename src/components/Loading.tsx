import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <section className="w-full p-10 flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </section>
  );
}
