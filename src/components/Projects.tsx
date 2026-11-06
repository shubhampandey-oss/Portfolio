import React, { useState } from 'react';

export interface ProjectItem {
  id: string;
  indexLabel: string;
  categoryBadge: string;
  filterCategory: string;
  title: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  sourceUrl?: string;
}

export const initialProjects: ProjectItem[] = [
  {
    id: 'vortex-ai',
    indexLabel: 'PROJ // 01',
    categoryBadge: 'ARTIFICIAL INTELLIGENCE & NLP',
    filterCategory: 'ai',
    title: 'VORTEX AI — HYBRID FAQ & GENERAL INTELLIGENCE CHATBOT',
    summary: 'An intelligent hybrid conversational system combining TF-IDF cosine similarity with Google Gemini & OpenAI API routing.',
    highlights: [
      'Engineered a deterministic-to-generative query routing mechanism with dynamic FAQ retrieval from an extensible 128+ question database.',
      'Designed three runtime operational modes: Auto (semantic failover), FAQ Only (strict verification), and AI Assistant (creative reasoning).',
      'Built with Flask, scikit-learn, and vanilla JS, supporting automated API failover, multi-turn session persistence, and mathematical evaluation utilities.'
    ],
    techStack: [
      'Python',
      'Flask',
      'scikit-learn',
      'TF-IDF & NLP',
      'Google Gemini API',
      'OpenAI API',
      'JavaScript'
    ],
    metrics: [
      { value: '128+', label: 'KB QUESTIONS' },
      { value: '3-WAY', label: 'HYBRID ROUTING' }
    ],
    sourceUrl: 'https://github.com/shubhampandey-oss/Vortex-AI-Hybrid-FAQ-General-Intelligence-Chatbot'
  },
  {
    id: 'neuralwave-ai',
    indexLabel: 'PROJ // 02',
    categoryBadge: 'DEEP LEARNING & AUDIO SYNTHESIS',
    filterCategory: 'deep-learning',
    title: 'NEURALWAVE AI — DEEP LEARNING MUSIC GENERATOR',
    summary: 'A deep-learning platform utilizing LSTM neural networks to generate polyphonic musical compositions from MIDI corpora.',
    highlights: [
      'Trained multi-layer LSTM networks with dropout regularization and checkpointing on polyphonic MIDI files using music21 and PyTorch.',
      'Engineered an interactive Streamlit dashboard featuring real-time training loss graphs, piano-roll visualizations, and audio synthesis via Web Audio API.',
      'Implemented temperature-controlled sampling for customizable melody variance and full MIDI export capabilities for production DAWs.'
    ],
    techStack: [
      'Python',
      'PyTorch',
      'LSTM Networks',
      'Streamlit',
      'music21',
      'Plotly',
      'pytest'
    ],
    metrics: [
      { value: 'AUTOREG', label: 'TEMPERATURE SAMPLING' },
      { value: 'MIDI 1.0', label: 'MULTI-TRACK EXPORT' }
    ],
    sourceUrl: 'https://github.com/shubhampandey-oss/-Neuralwave-ai-music'
  },
  {
    id: 'student-portal',
    indexLabel: 'PROJ // 03',
    categoryBadge: 'FULL-STACK WEB DEVELOPMENT',
    filterCategory: 'fullstack',
    title: 'STUDENT REGISTRATION & MANAGEMENT PORTAL',
    summary: 'A robust, production-deployed administrative portal for institutional student record management and role-based workflows.',
    highlights: [
      'Designed RESTful endpoints for student lifecycle tracking with automated input validation and security middleware.',
      'Implemented server-side caching, automated database backups, background maintenance tasks, and health-check monitoring.',
      'Deployed on Render with automated GitHub CI/CD workflows and enforced HTTPS configuration.'
    ],
    techStack: [
      'Node.js',
      'Express.js 4.19',
      'SQLite',
      'Bootstrap 5',
      'EJS',
      'RESTful API',
      'Render CI/CD'
    ],
    metrics: [
      { value: 'HTTPS', label: 'ENFORCED SECURITY' },
      { value: 'BACKUP', label: 'AUTOMATED JOBS' }
    ],
    sourceUrl: 'https://github.com/shubhampandey-oss/Student-Registration-Management-Portal'
  },
  {
    id: 'object-detection',
    indexLabel: 'PROJ // 04',
    categoryBadge: 'COMPUTER VISION & AI',
    filterCategory: 'deep-learning',
    title: 'OBJECT DETECTION AND TRACKING APPLICATION',
    summary: 'A real-time computer vision system built for multi-object detection, tracking, and video analysis with interactive desktop and web interfaces.',
    highlights: [
      'Developed a real-time object detection and tracking system using Python, OpenCV, and YOLOv8.',
      'Integrated ByteTrack and BoT-SORT algorithms to track multiple objects with unique IDs and high accuracy.',
      'Built an interactive desktop GUI and web dashboard with live camera access, video uploads, and real-time control panels.',
      'Implemented confidence scores, bounding boxes, motion trails, snapshot capture, video recording, and real-time FPS monitoring.'
    ],
    techStack: [
      'Python',
      'OpenCV',
      'YOLOv8',
      'PyTorch',
      'Ultralytics',
      'ByteTrack',
      'BoT-SORT',
      'Tkinter',
      'Streamlit'
    ],
    metrics: [
      { value: 'REAL-TIME', label: 'FPS MONITORING' },
      { value: 'MULTI-OBJECT', label: 'BYTE & BOT-SORT' }
    ],
    sourceUrl: 'https://github.com/shubhampandey-oss/Object-Detection-and-Tracking-application'
  }
];

export interface ProjectsProps {
  className?: string;
  id?: string;
}

export const Projects: React.FC<ProjectsProps> = ({
  className = '',
  id = 'my-work'
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? initialProjects
    : initialProjects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id={id} className={`showcase-section py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <span id="projects" className="anchor-alias" aria-hidden="true" />
      
      {/* Top Filter Bar */}
      <div className="showcase-top-bar flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-8 mb-12 gap-6">
        <div>
          <span className="section-label font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2 block">
            SELECTED WORKS & REPOSITORIES
          </span>
          <h2 className="showcase-heading text-4xl md:text-5xl font-bold tracking-tight text-black">
            MY WORK
          </h2>
        </div>

        <div className="showcase-filters flex flex-wrap gap-2" role="tablist">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`filter-btn font-mono text-xs uppercase px-4 py-2 border transition-all ${
              activeFilter === 'all'
                ? 'bg-black text-white border-black'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
            }`}
          >
            ALL [{String(initialProjects.length).padStart(2, '0')}]
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ai')}
            className={`filter-btn font-mono text-xs uppercase px-4 py-2 border transition-all ${
              activeFilter === 'ai'
                ? 'bg-black text-white border-black'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
            }`}
          >
            AI & NLP
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('deep-learning')}
            className={`filter-btn font-mono text-xs uppercase px-4 py-2 border transition-all ${
              activeFilter === 'deep-learning'
                ? 'bg-black text-white border-black'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
            }`}
          >
            DEEP LEARNING
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('fullstack')}
            className={`filter-btn font-mono text-xs uppercase px-4 py-2 border transition-all ${
              activeFilter === 'fullstack'
                ? 'bg-black text-white border-black'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
            }`}
          >
            FULL-STACK
          </button>
        </div>
      </div>

      {/* Projects Stack */}
      <div className="projects-editorial-stack flex flex-col gap-12">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="project-card bg-white border border-zinc-200 p-6 md:p-10 shadow-sm transition-all duration-200 hover:border-zinc-400 hover:shadow-md"
            data-category={project.filterCategory}
          >
            <div className="project-header flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4 mb-8">
              <div className="project-meta-badges flex items-center gap-3">
                <span className="project-idx font-mono text-xs font-bold px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-black">
                  {project.indexLabel}
                </span>
                <span className="project-cat font-mono text-xs tracking-wider text-zinc-500 uppercase">
                  {project.categoryBadge}
                </span>
              </div>

              <div className="project-links flex items-center gap-3">
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link-btn inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase px-3.5 py-1.5 border border-zinc-300 text-zinc-800 hover:bg-black hover:text-white hover:border-black transition-all"
                    title="GitHub Repository"
                  >
                    <span>SOURCE CODE</span>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </a>
                )}
              </div>
            </div>

            <div className="project-main-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="project-info-col lg:col-span-2">
                <h3 className="project-title text-2xl md:text-3xl font-bold tracking-tight text-black mb-3">
                  {project.title}
                </h3>
                <p className="project-summary text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="project-highlights pt-5 border-t border-zinc-100">
                  <h4 className="highlights-heading font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    ENGINEERING HIGHLIGHTS
                  </h4>
                  <ul className="highlights-list space-y-2 text-zinc-700 text-sm leading-relaxed list-disc list-inside">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-tech-col flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-200 pt-6 lg:pt-0 lg:pl-8 gap-6">
                <div className="tech-stack-box">
                  <span className="tech-box-label font-mono text-xs font-bold tracking-wider text-zinc-400 uppercase mb-3 block">
                    TECH STACK
                  </span>
                  <div className="tech-tag-group flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="p-tag font-mono text-xs px-2.5 py-1 bg-zinc-50 border border-zinc-200 text-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-metric-box grid grid-cols-2 gap-4 pt-5 border-t border-zinc-100">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-metric-item flex flex-col">
                      <span className="m-val font-sans font-bold text-lg md:text-xl text-black">
                        {metric.value}
                      </span>
                      <span className="m-lbl font-mono text-[10px] tracking-wider text-zinc-500 uppercase mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
