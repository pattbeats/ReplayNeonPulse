import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import BrandLogo from './BrandLogo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Upcoming', path: '/upcoming' },
  { name: 'Story', path: '/story' },
  { name: 'Contact', path: '/contact' }
];

function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/[0.04] via-transparent to-transparent" />

      <div className="relative container-custom py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center gap-10 md:gap-12">
          <div className="max-w-md space-y-5">
            <BrandLogo size="lg" stacked />
            <p className="replayneonpulse-tagline text-base md:text-lg text-foreground/70 leading-relaxed">
              Deep bass. Hypnotic energy.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium tracking-wide text-foreground/65 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40">
              Follow
            </p>
            <SocialLinks className="gap-5 text-foreground/55" />
          </div>
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-foreground/45">
            © 2026 ReplayNeonPulse. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-foreground/45 hover:text-foreground/80 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-foreground/45 hover:text-foreground/80 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
