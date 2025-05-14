import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        <Link
          href="/kite"
          className="group relative overflow-hidden rounded-2xl aspect-square"
        >
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1655039/pexels-photo-1655039.jpeg')] bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75" />
          <div className="relative h-full flex flex-col justify-end p-8 transition-transform duration-500 group-hover:-translate-y-2">
            <h2 className="text-4xl font-bold text-white mb-4">Kite</h2>
            <p className="text-white/80">
              Explore my kiteboarding journey and adventures
            </p>
          </div>
        </Link>

        <Link
          href="/engineer"
          className="group relative overflow-hidden rounded-2xl aspect-square"
        >
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')] bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75" />
          <div className="relative h-full flex flex-col justify-end p-8 transition-transform duration-500 group-hover:-translate-y-2">
            <h2 className="text-4xl font-bold text-white mb-4">Engineer</h2>
            <p className="text-white/80">
              Discover my software engineering projects and expertise
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
