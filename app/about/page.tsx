import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image*/}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background_image_darker.png"
          alt="Background"
          fill
          className="brightness-50 object-cover object-top"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20230117-WA0001.jpg"
            alt="About"
            fill
            className="object-cover object-[center_20%] brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-4xl md:text-5xl font-bold mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Combining Worlds...
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Envison - Enable - Execute
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Professional Journey
              </h3>
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
