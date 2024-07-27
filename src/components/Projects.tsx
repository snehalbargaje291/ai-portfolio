'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HoverTiltCard from "./HoverTiltCard";

interface CardProps {
  card: {
    url: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    id: number;
  };
}

const Projects: React.FC = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <HoverTiltCard/>
  );
};

export default Projects;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Project 1",
    description: "Description for project 1.",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://example.com/project1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Project 2",
    description: "Description for project 2.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/project2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Project 3",
    description: "Description for project 3.",
    technologies: ["Angular", "JavaScript", "Bootstrap"],
    link: "https://example.com/project3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Project 4",
    description: "Description for project 4.",
    technologies: ["Vue", "Vuetify", "HTML"],
    link: "https://example.com/project4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Project 5",
    description: "Description for project 5.",
    technologies: ["Svelte", "CSS", "JavaScript"],
    link: "https://example.com/project5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Project 6",
    description: "Description for project 6.",
    technologies: ["React", "Redux", "Sass"],
    link: "https://example.com/project6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Project 7",
    description: "Description for project 7.",
    technologies: ["Next.js", "GraphQL", "TypeScript"],
    link: "https://example.com/project7",
    id: 7,
  },
];
