import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function KitePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/kite_landingpage.png"
            alt="Kiteboarding"
            fill
            className="object-cover object-[center_10%] brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            Experience the Thrill of Kiteboarding
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From beginner lessons to advanced techniques, discover the perfect blend
            of sport and nature
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Beginner Lessons</h3>
              <p className="text-muted-foreground">
                Start your kiteboarding journey with comprehensive lessons tailored
                to beginners.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Advanced Techniques</h3>
              <p className="text-muted-foreground">
                Perfect your skills with advanced training and specialized
                techniques.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Equipment Guide</h3>
              <p className="text-muted-foreground">
                Expert advice on selecting and maintaining your kiteboarding gear.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}