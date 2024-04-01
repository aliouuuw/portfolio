import React from "react";
import AnimatedSubTitle from "../ui/animated-subtitle";
import Projects from "./Projects";
import { Hammer } from 'lucide-react';

export const Works = () => {
  return (
    <section className="w-full mb-8 p-4 md:p-8 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90%">
      <div className="space-y-2 mb-4">
        <AnimatedSubTitle icon={<Hammer className="h-6"/>} text="Projects" className="text-3xl mb-2 flex items-center gap-x-2" delay={0.4} />
      </div>
      <Projects />
    </section>
  );
};
