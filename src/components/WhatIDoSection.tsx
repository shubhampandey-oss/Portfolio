import React from 'react';

export interface WhatIDoSectionProps {
  className?: string;
  id?: string;
}

export const WhatIDoSection: React.FC<WhatIDoSectionProps> = ({
  className = '',
  id = 'what-i-do'
}) => {
  const card1Badges = ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C'];
  const card2Badges = [
    'Node.js',
    'Express.js',
    'Flask',
    'PyTorch',
    'RESTful APIs',
    'SQLite',
    'Gemini API',
    'Claude API'
  ];

  return (
    <section
      id={id}
      className={`relative w-full py-24 px-4 md:px-8 bg-[#f4f4f5] border-y border-zinc-200 text-black ${className}`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3 block">
            CAPABILITIES // 002
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            What I Do
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Verified engineering toolkit across core computer science, intelligent systems, and scalable full-stack applications.
          </p>
        </div>

        {/* Two-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Languages & Core CS */}
          <div className="bg-white border border-zinc-200 p-8 flex flex-col justify-between shadow-sm transition-all duration-200 hover:border-zinc-400 hover:shadow-md">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                Languages & Core CS
              </h3>
              <p className="text-zinc-600 text-sm md:text-base font-medium mt-1">
                Programming foundation & system designs
              </p>
              <div className="border-t border-zinc-200 my-4" />
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed">
                Strong fundamentals in Object-Oriented Programming, Data Structures & Algorithms, and Database Management Systems.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-100">
              <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
                SKILLSET & TOOLS
              </span>
              <div className="flex flex-wrap gap-2">
                {card1Badges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs px-2.5 py-1 font-mono rounded-none transition-colors duration-150 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Web & Intelligent Dev */}
          <div className="bg-white border border-zinc-200 p-8 flex flex-col justify-between shadow-sm transition-all duration-200 hover:border-zinc-400 hover:shadow-md">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                Web & Intelligent Dev
              </h3>
              <p className="text-zinc-600 text-sm md:text-base font-medium mt-1">
                Modern framework ecosystems & AI API services
              </p>
              <div className="border-t border-zinc-200 my-4" />
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed">
                Specializing in full-stack architecture, API creations, server management, and LLM integrations.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-zinc-100">
              <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
                SKILLSET & TOOLS
              </span>
              <div className="flex flex-wrap gap-2">
                {card2Badges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs px-2.5 py-1 font-mono rounded-none transition-colors duration-150 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
