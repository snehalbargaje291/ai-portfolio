'use client'
import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for the card data
interface CardProps {
  src: string;
  description: string;
  title: string;
  techstack: string;
  link: string;
}

// Define the card data interface
interface CardData {
  src: string;
  description: string;
  title: string;
  techstack: string;
  link: string;
}

// Sample card data
const cardData: CardData[] = [
    {
        src: "/Projects/ai-mock-interview.png",
        description: "ai-mock-interview",
        title: "AI Mock Interview Platform",
        techstack: "Next.js, Tailwind CSS, Clerk Auth, Gemini API",
        link: "https://ai-mock-interview-ten.vercel.app/",
    },
    {
        src: "/Projects/angular-portfolio.png",
        description: "angular-portfolio",
        title: "Portfolio-I",
        techstack: "Angular, Bootstrap",
        link: "https://portfolio-snehal-bargaje.vercel.app/",
    },
    {
        src: "/Projects/vite+react-Portfolio.png",
        description: "vite+react-Portfolio",
        title: "Portfolio-II",
        techstack: "Vite, React, Tailwind CSS",
        link: "https://portfolio-snehalbargaje.vercel.app/",
    },
    {
        src: "/Projects/bookshelf.png",
        description: "bookshelf",
        title: "Bookshelf",
        techstack: "React, Tailwind CSS, Google Books API",
        link: "https://library-and-book-shelf.vercel.app/",
    },
    {
        src: "/Projects/DekstopForm-CRUD.png",
        description: "DekstopForm-CRUD",
        title: "Asp.net Core CRUD",
        techstack: "Asp.net, C#, SQL Server",
        link: "https://github.com/snehalbargaje291/asp.net",
    },
    {
        src: "/Projects/eComm-react.png",
        description: "eComm-react",
        title: "E-Commerce",
        techstack: "React, Tailwind CSS, FakeAPI",
        link: "https://ecommerce-chi-woad.vercel.app/",
    },
    {
        src: "/Projects/intern-startup.png",
        description: "intern-startup",
        title: "StartupIdea (Internship)",
        techstack: "Angular, Bootstrap",
        link: "https://startup-rbbi.vercel.app/",
    },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const tiltVariants = {
  hover: { rotateX: -10, rotateY: 10 },
};

const Card: React.FC<CardProps> = ({ src, description, title, techstack, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block h-72 bg-background border hover:border-none shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={cardVariants}
    style={{ perspective: '1000px' }}
  >
    <motion.div
      className="relative w-full h-full flex flex-col"
      whileHover="hover"
      variants={tiltVariants}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={description}
        className="w-full h-36 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex flex-col justify-between p-4 h-full text-foreground">
        <div className="mt-auto">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-xs mb-2">{techstack}</p>
          <p className="text-xs">{description}</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-xs font-semibold">View Project</span>
        </div>
      </div>
    </motion.div>
  </motion.a>
);

const CardSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-background">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            src={card.src}
            description={card.description}
            title={card.title}
            techstack={card.techstack}
            link={card.link}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CardSection;
