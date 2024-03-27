import Image from "next/image";
import { sanityClient } from "@/lib/sanity-client";

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
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default async function Experience() {
  const experiences = await getExperiences();
  return (
    <section className="w-full mb-8 py-12 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90%">
      <div className="px-4">
        <div className="space-y-4">
          <h2>Experience</h2>
          <p className="text-neutral-500 md:text-xl/relaxed">
            I&apos;ve had the pleasure of working with some great companies.
          </p>
        </div>
        <div className="w-full">
          {experiences.map((experience, index) => (
              <div key={index}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-lg font-bold">{experience.position}</h3>
                    <p className="text-sm text-neutral-500">
                      {experience.title}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 self-start pt-1">
                    {experience.startDate}- {experience.endDate}
                  </p>
                </div>
                <div className="my-2 text-sm text-pretty">
                  <p>
                    Led the design team in creating a new mobile app, resulting
                    in a 30% increase in user engagement.
                  </p>
                  <p>
                    Collaborated with cross-functional teams to improve the
                    overall user experience of the company&apos;s web platform.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
