import Image from "next/image";
import about_hero_image from "@/public/images/about_hero_image_3.jpg";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import about_content_image from "@/public/images/about_content.jpg";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";
import { useTranslations } from "next-intl";

export const metadata = PAGE_METADATA.about;

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="relative min-h-screen">
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
      {/* <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={about_hero_image}
            alt="About"
            fill
            className="object-cover object-[center_30%] brightness-50"
            priority
            placeholder="blur"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Combining Worlds...
          </h1>
        </div>
      </section> */}

      <Hero
        route="/about"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("title")}
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              The story and motivation behind
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              "It´s about doing, not waiting for things to happen by themselves"
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* Box Section */}
        <div className="container mx-auto px-4">
          <div className=" max-w-6xl mx-auto my-4">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-teal-200">
                Hi, my name is Steff...
              </h3>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                Steff, short for Stefan. Born in 1991 in a small town in
                southern Germany, Bavaria. And yes, you can call me a proud
                Bavarian too.
                <br />
                What can you expect of me? An open-minded character who seeks to
                challenge himself. A person who follows his mission: To realize
                the vision of <strong>combining worlds</strong>.
                <br />
                <br />
                But what does that mean? Basically this: It´s about combining
                the world of being an engineer with the one of being a kitesurf
                instructor. E voilà, I created my own lifestyle of being a{" "}
                <strong>Kite-Engineer</strong>.
                <br />A freelancer that provides services:
              </p>
              <ul className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base my-2">
                <li>
                  • that are related to the sport of kiteboarding as well as
                </li>
                <li>
                  • in particular fields of engineering like semiconductor
                  manufacturing.
                </li>
              </ul>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                And no, I don´t design kites. Nor am I looking forward to
                integrate electronics into kites. At least not for now - who
                knows?
                <br />
                It´s my unique way of dealing with our beloved capitalism: I
                share what I like doing and you get what you have not yet had
                before. That makes everyone a winner!
              </p>
              <br />
              <Image
                src={about_content_image}
                alt="Content image"
                className="object-cover object-top"
                priority
                placeholder="blur"
                width={1102}
                height={827}
              ></Image>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                Professional Part
              </h3>
              <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li>
                  Launching my freelancer career as Kite-Engineer to combine my
                  worlds into one, 2025
                </li>
                <li>
                  International University (IU) certificate as Python and SQL
                  Programmer, 2025
                </li>
                <li>
                  Offering kitesurf lessons in german, english and Portuguese,
                  2024
                </li>
                <li>VDWS kitesurf instructor license, 2023</li>
                <li>
                  Certified 6 Sigma Green Belt with focus on Lean Management,
                  2022
                </li>
                <li>Private kiteboarding lessons, 2021</li>
                <li>First contact with kiteboarding, 2018</li>
                <li>
                  Professional employments as process development engineer,
                  process engineer and laboratory assistant, 2015 - 2024
                </li>
                <li>B.Sc. in Microsystems Engineering, 2015</li>
                <li>
                  Started exploring the areas of micro- and nanosystems in, 2010
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                Personal Part
              </h3>
              <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li>"Be the change in the world you want to see"</li>
                <li>I am an explorer, an adventurer and a nerd</li>
                <li>Self-study was always more satisfying then school</li>
                <li>Yes, even I´ve once played football. Until I was 14</li>
                <li>Sports and outdoor activities are a big part of my life</li>
                <li>So is Linkin Park - being a fan since I´m 6 years old</li>
                <li>Have you ever listened to Eckhart Tolle? </li>
                <li>
                  Smiling at people on the street helps sharing good vibes
                </li>
                <li>
                  Philosophy, especially stoicism, was added since I´m 30 -
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
    </div>
  );
}
