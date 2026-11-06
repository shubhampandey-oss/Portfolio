import React from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer 
      className={`deep-footer bg-[#141618] text-[#f6f6f6] border-t border-zinc-700/60 pt-24 pb-16 px-6 md:px-10 scroll-mt-16 ${className}`} 
      id="contact"
    >
      <div className="footer-inner max-w-7xl mx-auto">
        {/* Top: Unified Initiate Contact Block */}
        <div className="footer-contact-block max-w-3xl mx-auto text-left pb-14">
          <span className="footer-contact-badge font-mono text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3 inline-block">
            GET IN TOUCH
          </span>
          <h2 className="footer-contact-title font-sans text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            CONTACT
          </h2>
          <p className="footer-contact-desc text-zinc-400 text-base leading-relaxed max-w-2xl mb-8">
            Interested in collaborating on intelligent systems, generative AI applications, or full-stack web products? Connect directly through any of the verified channels below.
          </p>

          <div className="footer-channel-grid grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:shubham2292pandey@gmail.com"
              className="footer-channel-card flex flex-col justify-between p-6 bg-[#1f2225] border border-zinc-700/60 text-white font-mono transition-all duration-200 hover:bg-white hover:text-[#141618] hover:-translate-y-0.5 hover:shadow-xl min-h-[110px]"
              title="Send direct email to Shubham Pandey"
            >
              <span className="fcard-tag text-xs font-semibold tracking-wider text-zinc-400">CHANNEL // 01</span>
              <span className="fcard-name text-sm font-bold tracking-wider uppercase mt-3">EMAIL ↗</span>
            </a>

            <a
              href="https://github.com/shubhampandey-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-channel-card flex flex-col justify-between p-6 bg-[#1f2225] border border-zinc-700/60 text-white font-mono transition-all duration-200 hover:bg-white hover:text-[#141618] hover:-translate-y-0.5 hover:shadow-xl min-h-[110px]"
              title="Visit GitHub Profile"
            >
              <span className="fcard-tag text-xs font-semibold tracking-wider text-zinc-400">CHANNEL // 02</span>
              <span className="fcard-name text-sm font-bold tracking-wider uppercase mt-3">GITHUB ↗</span>
            </a>

            <a
              href="https://linkedin.com/in/shubham-pandey-4078b934a"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-channel-card flex flex-col justify-between p-6 bg-[#1f2225] border border-zinc-700/60 text-white font-mono transition-all duration-200 hover:bg-white hover:text-[#141618] hover:-translate-y-0.5 hover:shadow-xl min-h-[110px]"
              title="Visit LinkedIn Profile"
            >
              <span className="fcard-tag text-xs font-semibold tracking-wider text-zinc-400">CHANNEL // 03</span>
              <span className="fcard-name text-sm font-bold tracking-wider uppercase mt-3">LINKEDIN ↗</span>
            </a>
          </div>
        </div>

        {/* Clean Subtle Divider */}
        <div className="footer-section-divider max-w-3xl mx-auto w-full h-[1px] bg-zinc-700/60 mb-8" />

        {/* Bottom 3-Element Details Row */}
        <div className="footer-bottom-bar max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400 uppercase">
          <span className="fbar-item fbar-credit font-semibold text-zinc-300 tracking-wider">
            DESIGNED AND DEVELOPED BY SHUBHAM PANDEY
          </span>
          <span className="fbar-item fbar-location text-zinc-400">
            INDIA
          </span>
          <span className="fbar-item fbar-copyright text-zinc-400">
            © 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
