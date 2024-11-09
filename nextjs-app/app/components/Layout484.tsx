"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
};

export type Layout484Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout484 = (props: Layout484Props) => {
  const { tagline, heading, buttons } = {
    ...Layout484Defaults,
    ...props,
  } as Props;

  const headingRef = useRef<HTMLHeadingElement>(null);
  const words = heading.split(" ");

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  // Pre-calculate ranges for transforms
  const transformRanges = useMemo(() => 
    words.map((_, i) => ({
      start: i * 0.025,
      end: (i * 0.025) + 0.025
    })), [words]
  );

  // Create transforms using the pre-calculated ranges
  const transforms = transformRanges.map(({ start, end }) => 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(scrollYProgress, [start, end], [0, -50])
  );

  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 ref={headingRef} className="text-5xl font-bold md:text-7xl lg:text-8xl">
          {words.map((word, index) => (
            <motion.span 
              key={index} 
              style={{ y: transforms[index] }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout484Defaults: Layout484Props = {
  tagline: "Tagline",
  heading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
