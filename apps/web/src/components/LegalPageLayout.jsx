import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function LegalPageLayout({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{`${title} - ReplayNeonPulse`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />

      <main className="pt-16 min-h-screen bg-background">
        <section className="py-14 md:py-20 lg:py-24">
          <div className="container-custom max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/55 hover:text-primary transition-colors duration-200 mb-10 md:mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              {title}
            </h1>
            <p className="text-sm text-foreground/45 mb-12 md:mb-16">
              Last updated: July 12, 2026
            </p>

            <div className="space-y-10 md:space-y-12 text-foreground/80 leading-relaxed">
              {children}
            </div>

            <div className="mt-16 pt-8 border-t border-border/50">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to ReplayNeonPulse
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function LegalSection({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
        {title}
      </h2>
      {children}
    </section>
  );
}

export { LegalPageLayout, LegalSection };
