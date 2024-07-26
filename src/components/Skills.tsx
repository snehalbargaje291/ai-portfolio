"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function Skills() {
  return (
    <div data-aos="fade-up" className="h-auto rounded-md flex flex-col md:flex-row antialiased items-center justify-center relative overflow-hidden">
      <div className="relative w-full md:w-[30%] lg:w-[20%] rounded-lg flex-shrink-0 p-4">
        <h1 className="tracking-wider  font-bold text-md uppercase mb-2">Skills & Technologies</h1>
        <p className="text-xs mb-4">Explore the technologies and skills that I specialize in, showcasing my expertise and experience.</p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "HTML",
    img: '/html (1).png',
  },
  {
    title: "CSS",
    img: '/CSS.png',
  },
  {
    title: "Tailwind CSS",
    img: '/Tailwind CSS.png',
  },
  {
    title: "Bootstrap",
    img: '/Bootstrap New.png',
  },
  {
    title: "Javascript",
    img: '/javascript.png',
  },
  {
    title: "React",
    img: '/react.svg',
  },
  {
    title: "Next.js",
    img: '/Next.js.png',
  },
  {
    title: "Angular",
    img: '/Angular.png',
  },
  {
    title:"Github",
    img: '/Github.png',
  }
];
