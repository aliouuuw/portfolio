
import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export default function BannerComponent() {
  return (
    <Banner className="pt-2 px-8">
      <div className="flex w-full justify-between rounded-2xl border border-neutral-700 shadow-neutral-900 shadow-lg backdrop-blur-md bg-gradient-to-bl from-transparent to-neutral-950 to-90% p-2 ">
        <div className="mx-auto flex items-center">
          <div className="flex items-center text-sm text-center ">
            <MdAnnouncement className="m-2 h-4 w-4" />
            <p className="max-md:text-xs text-neutral-400">
              Working on adding mobile apps to Projects. Here&nbsp;
            <span className="text-green-500">soon</span>
            </p>
          </div>
        </div>
        <BannerCollapseButton color="gray" className="border-0 bg-transparent text-neutral-400">
          <HiX className="h-4 w-4" />
        </BannerCollapseButton>
      </div>
    </Banner>
  );
}
