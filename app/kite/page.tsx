import Image from "next/image";
// import Header from "../../components/layout";
// import Footer from "../../components/layout";
import { Button } from "@/components/ui/button";

export default function KitePage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="relative pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience the Thrill of Kiteboarding
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From beginner lessons to advanced techniques, discover the perfect
              blend of sport and nature
            </p>
            <Button size="lg" className="group">
              Start Your Journey
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Beginner Lessons</h3>
              <p className="text-muted-foreground">
                Start your kiteboarding journey with comprehensive lessons
                tailored to beginners.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">
                Advanced Techniques
              </h3>
              <p className="text-muted-foreground">
                Perfect your skills with advanced training and specialized
                techniques.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Equipment Guide</h3>
              <p className="text-muted-foreground">
                Expert advice on selecting and maintaining your kiteboarding
                gear.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg"
              alt="Kiteboarding action shot"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
