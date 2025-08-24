
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center -mt-16">
      <div className="w-full animate-fade-in-up">
        <h1 className="text-lg md:text-xl font-mono text-dark-green-text mb-4">
          Hi, my name is
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">
          Dhiwa Kusumah.
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-dark-text-secondary mb-8">
          I build things for the web.
        </h3>
        <p className="max-w-2xl text-dark-text-secondary leading-relaxed">
          I'm an enthusiast programmer specializing in creating exceptional, high-quality digital experiences. Currently, I'm focused on building accessible, human-centered products and pushing the boundaries of web technology.
        </p>
         <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block mt-8 px-6 py-3 border border-dark-green-text text-dark-green-text rounded-md hover:bg-dark-green-text/10 transition-colors duration-300 font-mono"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
