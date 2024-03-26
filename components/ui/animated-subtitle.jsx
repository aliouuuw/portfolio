"use client"

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function AnimatedSubTitle({ className, text, delay}) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y:20,
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        delay: delay,
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <h2 aria-label={text} role="heading" className={className}>
      {text.split(" ").map((word, index) => {
        return (
            //word animation
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.1,
            }}
            style={{
              display: "inline-block",
            }}
          >
            {word}
            <span className="inline-block">&nbsp;</span>
          </motion.span> 
        );
      })}
    </h2>
  );
}
