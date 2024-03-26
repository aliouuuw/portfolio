import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (
    <AuroraBackground>
      <main className="my-4 w-screen mx-auto scale-90 md:max-w-[765px] md:scale-100 text-neutral-50">
        <Hero />
        <Experience />
        <Contact />
      </main>
    </AuroraBackground>
  );
}
