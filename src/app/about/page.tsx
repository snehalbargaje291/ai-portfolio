import { DragCards } from '@/components/DragCards';
import HoverTiltCard from '@/components/HoverTiltCard';
import Projects from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { StickyScrollRevealDemo } from '@/components/StickeyScroll';
import { StickyScroll } from '@/components/ui/stickey-scroll-reveal';
import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I'm Snehal Bargaje, a passionate frontend developer with a strong background in building responsive and engaging web applications. I specialize in working with modern web technologies like React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-lg mb-4">
          With a background in Computer Applications and hands-on experience from various projects and internships, I strive to create intuitive and visually appealing user experiences. I am always eager to learn new technologies and improve my skills.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <HoverTiltCard/>
          <HoverTiltCard/>
          {/* <Projects/> */}
        </div>
        <StickyScrollRevealDemo/>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <DragCards/>
      </section>

      <section>
        <Skills/>
      </section>
    </div>
  );
};

export default About;
