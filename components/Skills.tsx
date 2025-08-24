
import React from 'react';
import type { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center flex items-center justify-center gap-4">
     <span className="text-dark-green-text font-mono text-2xl">01.</span> {children}
  </h2>
);

const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-cyan-400"><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>
);
const TypeScriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12"><path fill="#007acc" d="M0 0h48v48H0z"></path><path fill="#fff" d="M24.3 32.1h-3.3l-2.1 3.9h-3.4l5.5-9.7h3.3v9.7h-3.5v-3.9zm-2.1-2.2l-1.9-3.2-1.9 3.2h3.8zM38.4 26.3c0-2.4-1.3-4.1-3.6-4.1-2.3 0-3.6 1.7-3.6 4.1 0 2.4 1.3 4.1 3.6 4.1s3.6-1.7 3.6-4.1zm-4.3 0c0-1 .4-1.8 1-1.8s1 .8 1 1.8-.4 1.8-1 1.8-1-.8-1-1.8zM18.8 24.1h-5.6v2.1h2.2v7.7h3.4V24.1z"></path></svg>
);
const NodeJSIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-12 h-12"><path fill="#8CC84B" d="M128 0C57.311 0 0 57.311 0 128c0 70.689 57.311 128 128 128c70.689 0 128-57.311 128-128C256 57.311 198.689 0 128 0z"></path><path fill="#FFF" d="m184.886 168.72l-40.457-69.658V168.49h-24.872v-82.98h23.72l40.457 69.658V85.51h24.872v83.21z"></path></svg>
);
const TailwindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-12 h-12 text-teal-400 fill-current"><path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z M10.66 12.553c-1.332 0-2.036-.582-2.73-1.464l-.999 1.58c.89.845 2.15 1.464 3.729 1.464 2.894 0 4.508-1.928 4.508-4.593 0-2.31-1.29-3.8-3.112-4.42l-1.129-.39c-.588-.21-.83-.435-.83-.816 0-.47.33-.845.989-.845.69 0 1.15.3.1.66.72l1.01-1.58c-.604-.42-1.382-.705-2.28-.705-2.22 0-3.63 1.595-3.63 3.665 0 2.19 1.23 3.42 2.76 3.93l1.16.39c.675.225.89.48.89.875 0 .54-.42.92-1.11.92z"></path></svg>
);
const FigmaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12"><path fill="#F24E1E" d="M12 24a6 6 0 0 1-6-6v-6h6a6 6 0 0 1 0 12Z"></path><path fill="#FF7262" d="M6 12V6a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v6H6Z"></path><path fill="#A259FF" d="M12 12h6a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6h6Z"></path><path fill="#1ABCFE" d="M18 12V6a6 6 0 0 0-6-6h0a6 6 0 0 0-6 6v6h12Z"></path><path fill="#0ACF83" d="M18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6Z"></path></svg>
);
const GitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-orange-600 fill-current"><path d="M21.92,6.59a1,1,0,0,0-1.18-.32l-5.3,1.51-3-3a1,1,0,0,0-1.42,0l-3,3L2.69,6.27A1,1,0,0,0,1.5,7.75l5.09,2.1-5.1,5.1a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L8.1,11.18l2.1,5.09a1,1,0,0,0,1.18.68,1,1,0,0,0,.68-1.18L10.37,11l3,3a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l3-3,1.51,5.3a1,1,0,0,0,.91.68,1,1,0,0,0,.27,0,1,1,0,0,0,.76-1.18l-1.7-6,6-1.7A1,1,0,0,0,21.92,6.59Z"></path></svg>
);

const skills: Skill[] = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'Node.js', icon: <NodeJSIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Figma', icon: <FigmaIcon /> },
    { name: 'Git', icon: <GitIcon /> },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <SectionTitle>My Skillset</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 bg-dark-card border border-dark-border rounded-lg transition-transform transform hover:-translate-y-2"
                    >
                        {skill.icon}
                        <p className="mt-4 text-dark-text-secondary font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
