'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export const DragCards: React.FC = () => {
  return (
    <section className="relative grid h-[500px] w-full place-content-center overflow-hidden bg-background">
      <h2 className="relative z-0 text-[20vw] font-black text-foreground md:text-[150px]">
        Developer<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const cardData = [
  {
    src: "/Projects/ai-mock-interview.png",
    description: "ai-mock-interview",
    rotate: "6deg",
    top: "20%",
    left: "25%",
    className: "w-36 md:w-56",
    title: "AI Mock Interview Platform",
    techstack: "Next.js, Tailwind CSS, Clerk Auth, Gemini API",
    link: "https://ai-mock-interview-ten.vercel.app/",
  },
  {
    src: "/Projects/vite+react-Portfolio.png",
    description: "vite+react-Portfolio",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-24 md:w-48",
    title: "Portfolio-II",
    techstack: "Vite, React, Tailwind CSS",
    link: "https://portfolio-snehalbargaje.vercel.app/",
  },
  {
    src: "/Projects/angular-portfolio.png",
    description: "angular-portfolio",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-52 md:w-80",
    title: "Portfolio-I",
    techstack: "Angular, Bootstrap",
    link: "https://portfolio-snehal-bargaje.vercel.app/",
  },
  {
    src: "/Projects/bookshelf.png",
    description: "bookshelf",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
    title: "Bookshelf ",
    techstack: "React, Tailwind CSS, Google Books API",
    link: "https://library-and-book-shelf.vercel.app/",
  },
  {
    src: "/Projects/DekstopForm-CRUD.png",
    description: "DekstopForm-CRUD",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-40 md:w-64",
    title: "Asp.net Core CRUD",
    techstack: "Asp.net , C# , SQL Server",
    link: "https://github.com/snehalbargaje291/asp.net",
  },
  {
    src: "/Projects/eComm-react.png",
    description: "eComm-react",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-48",
    title: "E-Commerce ",
    techstack: "React, Tailwind CSS, FakeAPI",
    link: "https://ecommerce-chi-woad.vercel.app/",
  },
  {
    src: "/Projects/intern-startup.png",
    description: "intern-startup",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-48",
    title: "StartupIdea (Internship)",
    techstack: "Angular, Bootstrap",
    link: "https://startup-rbbi.vercel.app/",
  },
];

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {cardData.map((card, index) => (
        <Card key={index} containerRef={containerRef} {...card} />
      ))}
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  description: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  title: string;
  techstack: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  description,
  top,
  left,
  rotate,
  className,
  title,
  techstack,
  link,
}) => {
  const [zIndex, setZIndex] = useState<number>(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-background rounded-lg p-4 pb-8",
        className
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg opacity-60 "
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="relative z-10 font-semibold">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{techstack}</p>
        <Link href={link} className="text-blue-500 hover:underline">Link</Link>
      </div>
    </motion.div>
  );
};