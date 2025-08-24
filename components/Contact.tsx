
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-100 mb-4 text-center flex items-center justify-center gap-4">
       <span className="text-dark-green-text font-mono text-2xl">03.</span> {children}
    </h2>
  );

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <SectionTitle>What's Next?</SectionTitle>
            <h3 className="text-5xl font-bold text-gray-100 mb-4">Get In Touch</h3>
            <p className="max-w-xl mx-auto text-dark-text-secondary mb-8">
                I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <a
                href="mailto:dhewarya@gmail.com"
                className="inline-block px-8 py-4 border border-dark-green-text text-dark-green-text rounded-md hover:bg-dark-green-text/10 transition-colors duration-300 font-mono text-lg"
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
