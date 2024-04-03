
import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export default function BannerComponent() {
  return (
    <Banner className="pt-2 px-8">
      <div className="flex w-full justify-between rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90% p-2 ">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-neutral-400">
            <MdAnnouncement className="m-2 h-4 w-4" />
            <span className="[&_p]:inline">
              Working on adding mobile apps to Projects. They&apos;ll be here&nbsp;
            </span>
            <span className="text-green-500">soon</span>
          </p>
        </div>
        <BannerCollapseButton color="gray" className="border-0 bg-transparent text-neutral-400">
          <HiX className="h-4 w-4" />
        </BannerCollapseButton>
      </div>
    </Banner>
  );
}
