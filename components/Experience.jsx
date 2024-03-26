import React from "react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity-client";

// async function getExperiences() {
//   try {
//     const query = `
//           *[_type == 'experience'] {
//               title,
//               position,
//               startDate,
//               endDate,
//               "imageUrl": image.asset->url,
//               description,
//             }
//           `;

//     const experiences = await sanityClient.fetch(
//       query,
//       {},
//       { next: { revalidate: 0 } }
//     );
//     if (!experiences) {
//       return {
//         notFound: true,
//       };
//     }
//     console;
//     log(JSON.stringify(experiences));
//     return experiences;
//   } catch (error) {
//     console.error("Error fetching article info:", error);
//   }
// }

export const Experience = () => {
  return (
    <section className="w-full mb-8 py-12 md:py-24 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-900 to-90%">
      <div className="px-4 grid max-w-3xl items-start gap-4 xl:grid-cols-2">
        <div className="space-y-4">
          <h2>Experience</h2>
          <p className="text-neutral-500 md:text-xl/relaxed">
            I&apos;ve had the pleasure of working with some great companies.
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col justify-center ">
              <h3 className="text-lg font-bold">Senior Software Engineer</h3>
              <p className="text-sm text-neutral-500">BankingBook Analytics</p>
            </div>
            <p className="text-sm text-neutral-500 self-start pt-1">Jan 2019 - Present</p>
          </div>
          <div className="my-2 text-sm text-pretty">
            <p>Led the design team in creating a new mobile app, resulting in a 30% increase in user engagement.</p>
            <p>
              Collaborated with cross-functional teams to improve the overall user experience of the company&apos;s web
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
