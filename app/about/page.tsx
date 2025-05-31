import Image from "next/image";
import about_hero_image from "@/public/images/about_hero_image.jpg";
import background_image_darker from "@/public/images/background_image_darker.jpeg";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image*/}
      <div className="fixed inset-0 -z-10">
        <Image
          src={background_image_darker}
          alt="Background"
          fill
          className="brightness-50 object-cover object-top"
          priority
          placeholder="blur"
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={about_hero_image}
            alt="About"
            fill
            className="object-cover object-[center_20%] brightness-50"
            priority
            placeholder="blur"
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
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <h2
              className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              The story and motivation behind
            </h2>
            <p className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              "It´s about doing, not waiting for things to happen by themselves"
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr justify-items-center"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                Professional Part
              </h3>
              <ul className="text-muted-foreground list-disc list-outside pl-5 space-y-4">
                <li>
                  Launching my freelancer career as Kite-Engineer to combine my
                  worlds into one, 2025
                </li>
                <li>
                  International University (IU) certificate as Python and SQL
                  Programmer, 2025
                </li>
                <li>
                  Offering kitelessons in german, english and portugues, 2024
                </li>
                <li>VDWS instructor license, 2023</li>
                <li>
                  Certified Green Belt with focus on Lean Management, 2022
                </li>
                <li>Privat kiteboarding lessons, 2021</li>
                <li>First contact with kiteboarding, 2018</li>
                <li>
                  Professional employments as process development engineer,
                  process engineer and laboratory assisstant, 2015 - 2024
                </li>
                <li>B.Sc. in Microsystems Engineering, 2015</li>
                <li>
                  Started exploring the areas of micro- and nanosystems in, 2010
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                Personal Part
              </h3>
              <ul className="text-muted-foreground list-disc list-outside pl-5 space-y-4">
                <li>"Be the change in the world you want to see"</li>
                <li>Self-study was always more satisfying then school</li>
                <li>Yes, even I´ve once played football. Until I was 14</li>
                <li>Sports and outdoor activities as big part of my life</li>
                <li>So is Linkin Park - being a fan since I´m 6 years old</li>
                <li>Have you ever listened to Eckhart Tolle? </li>
                <li>
                  Philosophy, espacially stoicism, was added since I´m 30 -
                  coincidence?
                </li>
                <li>
                  A book that changed my life? O Alquimista - Paulo Coelho
                </li>
                <li>Follower of the "Free and Open Source Idea"</li>
                <li>Growing as a community is satisfaction times x</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
