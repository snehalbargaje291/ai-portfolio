import { Skills } from '@/components/Skills';
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
        <ul className="list-disc list-inside space-y-4">
          <li>
            <h3 className="text-xl font-medium">Project 1: AI Mock Interview App</h3>
            <p>
              Developed an AI-powered mock interview application that allows users to simulate interviews, receive feedback, and track their progress. Implemented using React, Next.js, and integrated with various APIs for speech-to-text functionalities.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">Project 2: E-Commerce Website</h3>
            <p>
              Created a responsive e-commerce website featuring a modern UI with Tailwind CSS. Integrated functionalities for product display, cart management, and a checkout process using React and Next.js.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">Project 3: Portfolio Website</h3>
            <p>
              Built a personal portfolio website to showcase my skills, projects, and experience. Designed using a mobile-first approach with a focus on user experience and visual appeal.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <h3 className="text-xl font-medium">Software Development Intern</h3>
            <p>Esparse Matrix Solution Pvt Ltd (4 months)</p>
            <p>
              Assisted in developing and maintaining software applications, participated in code reviews, and contributed to various frontend development tasks using Angular and React.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">Frontend Intern</h3>
            <p>Freelance</p>
            <p>
              Worked on various frontend projects, including UI component development and integration with backend services. Gained experience in working with modern web technologies and agile development practices.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <Skills/>
      </section>
    </div>
  );
};

export default About;
