// pages/about.js

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <header className="text-center mb-12">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold mt-4">About Me</h1>
      </header>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Who Am I?</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm a tech enthusiast and full-stack developer at the age of 14. I have a passion for coding and love to create innovative solutions to real-world problems.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">Description of project 1.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">Description of project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg">JavaScript</li>
          <li className="text-lg">React</li>
          <li className="text-lg">Next.js</li>
          <li className="text-lg">Node.js</li>
          <li className="text-lg">Express</li>
          <li className="text-lg">MongoDB</li>
          {/* Add more tech stacks as needed */}
        </ul>
      </section>
    </div>
  );
};

export default About;
