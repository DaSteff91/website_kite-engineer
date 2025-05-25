import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EngineerPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpg"
            alt="Engineering"
            fill
            className="object-cover object-[center_20%] brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            Combining Worlds...
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore - Instruct - Create - Enable - Deliver
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">
            Expand your project capabilities, strengthen your resource pool, and
            gain fresh insights — benefit from my engineering expertise in the
            areas of semiconductor manufacturing and software development:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Process Engineering
              </h3>
              <p className="text-muted-foreground">
                Creating robust and scalable solutions using modern
                technologies.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Development Engineering
              </h3>
              <p className="text-muted-foreground">
                Designing efficient and maintainable system architectures.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Project Management</h3>
              <p className="text-muted-foreground">
                Having Someone from outside taking care of your project
                management
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Technical Consulting
              </h3>
              <p className="text-muted-foreground">
                Expert guidance on technical decisions and implementation
                strategies.
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
