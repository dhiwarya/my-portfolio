
import React, { useState } from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

const allProjects: Project[] = [
  {
    title: 'Enterprise Design System',
    description: 'Led the development of a comprehensive design system used by over 20 teams, improving design consistency and development velocity by 40%. Built with React, TypeScript, and Storybook.',
    tags: ['React', 'TypeScript', 'Storybook', 'Figma'],
    repoUrl: 'https://github.com',
    type: 'professional',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Architected and built a high-performance, real-time analytics dashboard for a major e-commerce platform, handling over 1 million events per minute using WebSockets and D3.js.',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    liveUrl: 'https://example.com',
    type: 'professional',
  },
  {
    title: 'AI-Powered Portfolio Generator',
    description: 'A personal project that uses Gemini API to generate professional portfolio content based on a user\'s resume and GitHub profile. Features a sleek, animated UI built with Next.js.',
    tags: ['Next.js', 'Gemini API', 'Tailwind CSS'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    type: 'personal',
  },
  {
    title: 'Community Music Platform',
    description: 'A platform for discovering and sharing underground music. Includes features like playlist creation, artist profiles, and event listings. Built with Remix and Supabase for the backend.',
    tags: ['Remix', 'Supabase', 'PostgreSQL', 'Prisma'],
    repoUrl: 'https://github.com',
    type: 'personal',
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center flex items-center justify-center gap-4">
       <span className="text-dark-green-text font-mono text-2xl">02.</span> {children}
    </h2>
  );

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  const filteredProjects = allProjects.filter((p) => p.type === activeTab);

  const TabButton: React.FC<{
    tabName: 'professional' | 'personal';
    children: React.ReactNode;
  }> = ({ tabName, children }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${
        activeTab === tabName
          ? 'bg-dark-green text-white'
          : 'text-dark-text-secondary hover:bg-dark-card'
      }`}
    >
      {children}
    </button>
  );

  return (
    <section id="projects" className="py-24 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <SectionTitle>Things I've Built</SectionTitle>
      
      <div className="flex justify-center mb-8 space-x-4">
        <TabButton tabName="professional">Professional</TabButton>
        <TabButton tabName="personal">Personal</TabButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
