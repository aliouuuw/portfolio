import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity-client";
import Link from "next/link";
import { Separator } from "../ui/separator";

async function getProject() {
  try {
    const result = await sanityClient.fetch(
      `
    *[_type == 'project'] | order(title) {
      title,
      link,
      description,
      "imageUrl": image.asset->url,
      technologies,
    }
  `,
      {},
      { next: { revalidate: 0 } }
    );
    return result;
  } catch (error) {
    console.log("Failed request error: ", error);
  }
}

const Projects = async () => {
  const projects = await getProject();
  return (
    <Card>
      {projects.map((project, index) => {
        return (
          <Link
            href={project.link}
            key={index}
            target="_blank"
            className="group [&_h3]:hover:underline"
          >
            <CardHeader className="snap-start snap-always">
              <div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="my-3 flex flex-col gap-4 group-hover:translate-x-2 transition duration-300 delay-50">
              <div className="relative rounded-lg h-40 w-72 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="grid gap-1 text-sm">
                <p className="font-bold">Tools:</p>
                <p className="text-neutral-400">{project.technologies}</p>
              </div>
            </CardContent>
            {index != projects.length-1 ? <Separator className="bg-neutral-400 my-4"/> : null }
          </Link>
        );
      })}
    </Card>
  );
};

export default Projects;
