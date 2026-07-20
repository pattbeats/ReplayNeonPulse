
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Music, Headphones, Sparkles, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ArtistStoryPage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <>
      <Helmet>
        <title>{`Artist Story - ReplayNeonPulse`}</title>
        <meta name="description" content="Discover the journey behind ReplayNeonPulse's electronic soundscapes. Learn about the inspiration, philosophy, and creative process." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 min-h-full">
            <div
              className="absolute inset-0 size-full"
              style={{
                transform: `translateY(${parallaxOffset}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <picture className="absolute inset-0 block size-full">
                <source srcSet="/images/artist/artist-story-hero.webp" type="image/webp" />
                <img
                  src="/images/artist/artist-story-hero.jpg"
                  alt="ReplayNeonPulse live performance with instruments"
                  className="absolute inset-0 size-full object-cover object-[48%_58%] sm:object-[50%_56%] lg:object-[50%_54%]"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          </div>

          <div className="relative container-custom text-center z-10 px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary" style={{ letterSpacing: '-0.02em' }}>
              The Story Behind the Sound
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              A journey through emotion, technology, and artistic vision
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">The Beginning</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  Where it all started
                </h2>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Behind ReplayNeonPulse are two people brought together by both love and music.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Many years ago, their shared passion for electronic music turned into a lifelong journey. That journey eventually led them to say &quot;I do&quot; and build a life together, with music always at the heart of everything they created.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  DJ Replay performed for years at clubs, festivals, and events across Europe, Asia, and South America. Together, they also produced their own tracks and delivered live performances that left lasting memories for everyone who experienced them.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  In the heart of Zurich, they founded and operated their own music and dance club, creating a home for DJs, artists, and unforgettable nights filled with electronic music.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  After many exciting years in the scene, life took them in a different direction. They moved to Brazil, where they now enjoy a quieter life surrounded by nature on a small farm.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  But some passions never fade.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  The music was always there; waiting.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Today, they return with a fresh vision, deeper sound, and renewed creative energy under a new name: ReplayNeonPulse.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  This isn&apos;t about reliving the past.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  It&apos;s about writing the next chapter.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                {[
                  { icon: Music, title: 'Sonic Architecture', description: 'Building immersive soundscapes layer by layer' },
                  { icon: Headphones, title: 'Deep Listening', description: 'Crafted for headphones and contemplative moments' },
                  { icon: Sparkles, title: 'Emotional Resonance', description: 'Every note designed to evoke genuine feeling' },
                  { icon: Heart, title: 'Authentic Expression', description: 'Music that comes from a place of truth' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-card-foreground/80">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground mb-6">
                  <Music className="w-4 h-4" />
                  <span className="text-sm font-medium">Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  The creative approach
                </h2>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Every ReplayNeonPulse production starts with emotion.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  A deep groove. A hypnotic melody. A bassline that moves both body and mind.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Each track is carefully crafted layer by layer, balancing energy, atmosphere, and emotion to create a sound that feels timeless rather than trend-driven.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Inspired by the world&apos;s electronic underground, ReplayNeonPulse delivers music designed for late nights, open minds, and unforgettable moments.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  This is more than music.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  It&apos;s a journey through rhythm, emotion, and sound.
                </p>
              </div>

              <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground mb-6">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Impact</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  Connecting with listeners
                </h2>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Music has always been about creating connections.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  ReplayNeonPulse isn&apos;t just about beats or melodies—it&apos;s about sharing moments, emotions, and energy with people who feel the same passion for electronic music.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Whether it&apos;s on a dancefloor, through a livestream, or simply listening with headphones, every track is created with the hope of inspiring, moving, and connecting with listeners around the world.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  This is only the beginning of the journey.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  And we look forward to sharing every new chapter with you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ArtistStoryPage;
