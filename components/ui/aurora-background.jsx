"use client";
import { cn } from "@/utils/cn";
import React from "react";


export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
      <div
        className={cn(
          "relative h-[100vh] bg-black",
          className
        )}
        {...props}
      >
        <div className="absolute top-0 left-0 inset-0 overflow-hidden w-screen ">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--blue-900)_0%,var(--blue-900)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--blue-100)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:top_left]
            filter blur-md
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 brightness-75`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
  );
};
