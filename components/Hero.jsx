import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Marquee from "./ui/marquee";
import AnimatedTitle from "./ui/animated-title";
import AnimatedSubTitle from "./ui/animated-subtitle";

export const Hero = () => {
  const items = ["Front-end", "Back-end", "Mobile", "Arduino", "DevOps", "IoT"];
  return (
    <div className="">
      <div className="col-span-2 rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90% p-8">
        <div className="flex justify-between items-center">
          <div className="relative h-24 w-24 rounded-full mb-4">
            <Image
              src="/pp.jpg"
              alt="Profile Image"
              fill
              className="rounded-full object-center brightness-95 object-cover"
            />
          </div>
          <div className="flex gap-x-2">
            <Link href="https://twitter.com/aliouuuw" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aliou-wade-35a435196/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6" />
            </Link>
          </div>
        </div>
        <AnimatedTitle text="Hi, I'm Aliou" className="text-xl mb-2" x={20} y={10} />
        <AnimatedSubTitle
          text="With over 5 years of experience, I've worked with startups and large corporations worldwide, crafting cutting-edge applications and innovative technology products."
          className="text-sm text-pretty text-neutral-400 "
        />
      </div>
      <Marquee items={items} />
    </div>
  );
};
