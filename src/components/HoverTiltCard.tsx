"use client";
import React, { useRef, MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import Link from "next/link";
import { Github } from "lucide-react";

interface TiltCardProps {
  position: string;
  company: string;
  duration: string;
  description: string;
  techStack: string;
  link: string;
  github: string;
}

interface HoverTiltCardProps extends TiltCardProps {}

const HoverTiltCard: React.FC<HoverTiltCardProps> = (props) => {
  return (
    <div className="grid w-full place-content-center">
      <TiltCard {...props} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard: React.FC<TiltCardProps> = ({
  position,
  company,
  duration,
  description,
  techStack,
  link,
  github,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[21rem] w-72 lg:h-72 lg:w-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-background p-6 shadow-lg"
      >
        <p
          className="text-center text-xl font-bold mb-2"
        >
          {position}
        </p>
        <p
          className="text-center text-lg font-semibold mb-1"
        >
          {company}
        </p>
        <p
          className="text-center text-sm mb-1"
        >
          {duration}
        </p>
        <p
          className="text-center text-sm mb-2"
        >
          {description}
        </p>
        <p
          className="text-center text-sm mb-4"
        >
          {techStack}
        </p>
        <div className="flex flex-row justify-evenly">
        <LinkPreview url={link} className="text-center mb-2">
          Website
        </LinkPreview>
        <Link
          href={github}
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center"
        >
          <Github size={24} />
        </Link>

        </div>
      </div>
    </motion.div>
  );
};

export default HoverTiltCard;
