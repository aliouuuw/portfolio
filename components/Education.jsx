import React from "react";
import AnimatedSubTitle from "./ui/animated-subtitle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section className="w-full mb-8 p-4 md:p-8 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90%">
      <div className="space-y-2 mb-4">
        <AnimatedSubTitle
          icon={<GraduationCap className="h-6" />}
          text="Education"
          className="text-3xl mb-2 flex items-center gap-x-2"
          delay={0.4}
        />
        <AnimatedSubTitle
          text="My educational background and certifications."
          className="text-sm text-pretty text-neutral-400 "
          delay={0.6}
        />
      </div>
      <div className="space-y-4 md:space-y-6 ">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold leading-none">University of Ottawa</h3>
              <p className="text-sm text-neutral-400">
                BaSc in Software Engineering | 2019-2024
              </p>
            </div>
            <Link
              href={
                "https://catalogue.uottawa.ca/en/undergrad/basc-software-engineering/"
              }
              target="_blank"
            >
              <Button size="sm" variant={"outline"}>
                Website
              </Button>
            </Link>
          </div>
        </div>
        <Separator className="bg-neutral-400 my-2" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold leading-none">Meta</h3>
              <p className="text-sm text-neutral-400">
                Front-End Developer Specialization | 2023
              </p>
            </div>
            <Link
              href={
                "https://www.coursera.org/account/accomplishments/specialization/certificate/PXDRL59ZMF2P"
              }
              target="_blank"
            >
              <Button size="sm" variant={"outline"}>
                Certificate
              </Button>
            </Link>
          </div>
        </div>
        <Separator className="bg-neutral-400 my-2" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold leading-none">DataCamp</h3>
              <p className="text-sm text-neutral-400">
                Python for Data Science Certification | 2018
              </p>
            </div>
            <Link
              href={
                "https://www.datacamp.com/statement-of-accomplishment/course/054d9c45ce9ace11e3f635619d19493742823895"
              }
              target="_blank"
            >
              <Button size="sm" variant={"outline"}>
                Certificate
              </Button>
            </Link>
          </div>
        </div>
        <Separator className="bg-neutral-400 my-2" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold leading-none">
                Dakar American University of Science & Technology
              </h3>
              <p className="text-sm text-neutral-400">
                BaSc in Computer Science | 2017
              </p>
            </div>
            <Link href={"https://daust.org/"} target="_blank">
              <Button size="sm" variant={"outline"}>
                Website
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
