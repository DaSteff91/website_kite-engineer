import React from "react";
import Image from "next/image";
import { Code2, Terminal, Wrench } from "lucide-react";

export default function EngineerPage() {
  //   return (
  //     <main className="container mx-auto px-4 py-16">
  //       <div className="max-w-4xl mx-auto">
  //         <h1 className="text-4xl font-bold mb-8 text-center">Engineering Excellence</h1>

  //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
  //           <Card>
  //             <CardHeader>
  //               <Code2 className="w-8 h-8 mb-2 text-primary" />
  //               <CardTitle>Clean Code</CardTitle>
  //               <CardDescription>Writing maintainable and efficient code</CardDescription>
  //             </CardHeader>
  //             <CardContent>
  //               <p className="text-muted-foreground">
  //                 We follow best practices and industry standards to ensure our code is clean, readable, and scalable.
  //               </p>
  //             </CardContent>
  //           </Card>

  //           <Card>
  //             <CardHeader>
  //               <Terminal className="w-8 h-8 mb-2 text-primary" />
  //               <CardTitle>Technical Expertise</CardTitle>
  //               <CardDescription>Deep technical knowledge</CardDescription>
  //             </CardHeader>
  //             <CardContent>
  //               <p className="text-muted-foreground">
  //                 Our team brings years of experience across multiple technology stacks and domains.
  //               </p>
  //             </CardContent>
  //           </Card>

  //           <Card>
  //             <CardHeader>
  //               <Wrench className="w-8 h-8 mb-2 text-primary" />
  //               <CardTitle>Problem Solving</CardTitle>
  //               <CardDescription>Innovative solutions to complex challenges</CardDescription>
  //             </CardHeader>
  //             <CardContent>
  //               <p className="text-muted-foreground">
  //                 We tackle complex engineering challenges with creative and efficient solutions.
  //               </p>
  //             </CardContent>
  //           </Card>
  //         </div>

  //         <section className="prose dark:prose-invert max-w-none">
  //           <h2 className="text-3xl font-semibold mb-4">Our Engineering Approach</h2>
  //           <p className="mb-4">
  //             We combine cutting-edge technology with proven engineering principles to deliver robust and scalable solutions.
  //             Our focus is on creating sustainable, maintainable systems that provide long-term value.
  //           </p>
  //           <p>
  //             Whether it&apos;s developing new features, optimizing performance, or solving complex technical challenges,
  //             our engineering team is committed to excellence in every aspect of our work.
  //           </p>
  //         </section>
  //       </div>
  //     </main>
  //   )
  // }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1
          className="py-8 text-4xl font-bold mb-8 text-center md:text-5xl
        bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Engineering Excellence
        </h1>
        <h2 className="text-center">
          This website is under construction. Reach out for me -
          stefan@kite-engineer.de or via Contact
        </h2>
        <div className="flex items-center justify-center py-4">
          <Image
            src="/images/IMG-20230117-WA0001.jpg"
            alt="Placeholder"
            width={480}
            height={224}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
