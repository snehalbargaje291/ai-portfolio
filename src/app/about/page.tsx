import React from 'react';
import { DragCards } from '@/components/DragCards';
import HoverTiltCard from '@/components/HoverTiltCard';
import { Skills } from '@/components/Skills';
import H1 from '@/components/ui/H1';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TextRevealCard } from '@/components/ui/text-reveal';

const experiences = [
  {
    position: "Frontend Developer Intern",
    company: "Botbyte.in",
    duration: "2 months",
    description: "Developed responsive web applications.",
    techStack: "Nextjs, Tailwind CSS",
    link: "https://botbyte.in/",
    github: "https://github.com/snehalbargaje291",
  },
  {
    position: "Software Development Intern",
    company: "eSparse Matrix Solution Pvt Ltd",
    duration: "4 months",
    description: "Worked on several web development projects.",
    techStack: "Angular, React, Bootstrap, Tailwind CSS",
    link: "https://startup-rbbi.vercel.app/",
    github: "https://github.com/snehalbargaje291",
  },
];
const words = `Your Vision, My Code`;
const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <section className="mb-8 flex justify-center items-center flex-col gap-4">
        <TextRevealCard text="About Me" revealText={words} />
        <TextGenerateEffect words={words} className='lg:hidden'/>
        <p className="text-md">
          Hello! I'm Snehal Bargaje, a passionate frontend developer with a strong background in building responsive and engaging web applications. I specialize in working with modern web technologies like React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-md">
          With a background in Computer Applications and hands-on experience from various projects and internships, I strive to create intuitive and visually appealing user experiences. I am always eager to learn new technologies and improve my skills.
        </p>
      </section>

      <section>
        <Skills/>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <DragCards/>
      </section>

      <section className="mb-8 mx-4">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0'>
          {experiences.map((exp, index) => (
            <HoverTiltCard key={index} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;