import React from 'react';

export interface NavLinkItem {
  name: string;
  href: string;
}

export const navLinks: NavLinkItem[] = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'MY WORK', href: '#my-work' },
  { name: 'RESUME ↗', href: '#resume' },
];

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#f2f2f2]/90 backdrop-blur-md border-b border-zinc-200 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 font-bold text-lg text-black">
          <span className="w-7 h-7 bg-black text-white text-xs font-black flex items-center justify-center">
            SP
          </span>
          <span>
            SHUBHAM <span className="text-zinc-400">/</span> PANDEY
          </span>
          <span className="font-mono text-xs bg-zinc-200 px-1.5 py-0.5 rounded">
            DEV // 2026
          </span>
        </a>

        {/* Centered, evenly spaced navigation links */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black hover:text-zinc-500 transition-colors uppercase tracking-wider py-1.5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side actions: GitHub button and Contact button */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shubhampandey-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-zinc-300 hover:bg-black hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
          >
            <span>CONTACT ME</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
