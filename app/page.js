import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";

import { Hero } from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="w-screen mx-auto md:max-w-[765px] md:scale-100 text-neutral-50">
      <AuroraBackground>
        <div className="p-8">
          <Hero />
          <Experience />
          <Contact />
        </div>
      </AuroraBackground>
    </main>
  );
}
