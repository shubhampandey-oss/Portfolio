import React from 'react';
import { Mail } from 'lucide-react';

export interface HeroProps {
  name?: string;
  headline?: string;
  subheadline?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  contactEmail?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name = 'SHUBHAM',
  headline = 'Software Engineer & Intelligent Software Engineer',
  subheadline = 'Software Engineer and Intelligent Software Engineer specializing in scalable application development and modern web architectures.',
  githubUrl = 'https://github.com/shubhampandey-oss',
  linkedinUrl = 'https://linkedin.com/in/shubham-pandey-4078b934a',
  contactEmail = 'shubham2292pandey@gmail.com'
}) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-center-stage">
        {/* Echo Stack Hero Typography */}
        <div className="echo-stack-container" id="echoStackHero" data-text={name}>
          <div className="echo-layer layer-4">{name}</div>
          <div className="echo-layer layer-3">{name}</div>
          <div className="echo-layer layer-2">{name}</div>
          <div className="echo-layer layer-1">{name}</div>
          <h1 className="echo-layer layer-front" id="heroMainWord">{name}</h1>
        </div>

        {/* Punchline Wrapper */}
        <div className="hero-punchline-wrapper">
          <p className="hero-headline-tag">
            {headline}
          </p>
          <p className="hero-subheadline">
            {subheadline}
          </p>
        </div>

        {/* Hero CTA Group - Horizontally Centered Social & Contact Buttons */}
        <div className="hero-cta-group">
          <a href="#contact" className="hero-link-chip" title="Contact Shubham Pandey">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </a>

          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-link-chip"
            title="GitHub Profile"
          >
            <svg 
              className="w-3.5 h-3.5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>GITHUB</span>
          </a>

          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-link-chip"
            title="LinkedIn Profile"
          >
            <svg 
              className="w-3.5 h-3.5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
