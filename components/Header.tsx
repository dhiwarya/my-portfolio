
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const navLinks = [
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-card/80 backdrop-blur-sm border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 px-6 md:px-12 lg:px-24">
        <div 
          className="text-2xl font-bold font-mono text-dark-green-text cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          &lt;DK /&gt;
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-dark-text-secondary hover:text-dark-text transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
