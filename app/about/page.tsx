import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20230117-WA0001.jpg"
            alt="About"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            About Me
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Passionate about technology and kiteboarding
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground">
                [Your professional background and experience placeholder]
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>
              <p className="text-muted-foreground">
                [Your interests, hobbies, and motivation placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}