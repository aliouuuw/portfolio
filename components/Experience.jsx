import Image from "next/image";
import { sanityClient } from "@/lib/sanity-client";
import AnimatedSubTitle from "./ui/animated-subtitle";
import moment from 'moment';
import { PortableText } from "next-sanity";
import { RichTextComponents } from "./RichTextComponents";
import { Separator } from "./ui/separator";
import { BriefcaseBusiness } from 'lucide-react';

const getExperiences = async () => {
  try {
    const res = await sanityClient.fetch(`
      *[_type == 'experience'] {
        title,
        position,
        startDate,
        endDate,
        "imageUrl": image.asset->url,
        description,
      }
    `, {},  { next : { revalidate: 0 }});
    res.sort((a, b) => {
      const dateA = moment(a.startDate, "MMM YYYY");
      const dateB = moment(b.startDate, "MMM YYYY");
      return dateB.diff(dateA);
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default async function Experience() {
  const experiences = await getExperiences();
  return (
    <section className="w-full mb-8 p-4 md:p-8 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90%">
      <div className="">
        <div className="space-y-2 mb-4">
          <AnimatedSubTitle  icon={<BriefcaseBusiness className="h-6"/>} text="Experience" className="text-3xl mb-2 flex items-center gap-x-2"  delay={0.4}/>
          <AnimatedSubTitle
          text="I've had the pleasure of working with some great companies."
          className="text-sm text-pretty text-neutral-400"
          delay={0.6}
        />
        </div>

        <div className="w-full p-4 md:p-8 border border-neutral-700 rounded-lg h-96 overflow-scroll snap-y snap-mandatory">
          {experiences.map((experience, index) => (
              <div key={index} className="snap-always snap-start pt-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col justify-center ">
                    <h3 className="font-bold">{experience.position}</h3>
                    <p className="text-sm text-neutral-400">
                      {experience.title}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-400 self-start pt-1">
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
                <div className="my-2 text-sm text-pretty">
                <PortableText
                    value={experience.description}
                    components={RichTextComponents}
                  />
                </div>
                {index != experiences.length-1 ? <Separator className="bg-neutral-400 my-4"/> : null }
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
