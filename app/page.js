import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import Experience from "@/components/Experience";

import { Hero } from "@/components/Hero";
import { Works } from "@/components/projects/Works";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="w-screen mx-auto md:max-w-[765px] md:scale-100 text-neutral-50">
      <AuroraBackground>
        <div className="p-8">
          <Hero />
          <Works />
          <Experience />
          <Education />
          <Contact />
        </div>
      </AuroraBackground>
    </main>
  );
}
