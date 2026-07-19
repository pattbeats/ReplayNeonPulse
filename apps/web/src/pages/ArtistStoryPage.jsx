
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
                  ReplayNeonPulse emerged from a deep fascination with the intersection of cinematic storytelling and electronic music production. What began as late-night experiments in a small home studio evolved into a distinctive sonic identity that resonates with listeners across the globe.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  The name ReplayNeonPulse captures the pulse of neon-lit nights and emotional resonance—where classical orchestration meets modern synthesis, where silence holds as much power as sound, and where each composition tells a story without words.
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
                  Every ReplayNeonPulse composition begins with a feeling, a moment, or a story that demands to be told through sound. The production process is intentionally slow and deliberate, allowing each element to find its perfect place in the sonic landscape.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Drawing inspiration from film scores, ambient pioneers, and modern electronic producers, ReplayNeonPulse creates music that exists in the space between genres—too cinematic for the club, too rhythmic for pure ambient, yet perfectly suited for those who seek depth in their listening experience.
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
                  The most rewarding aspect of this journey has been hearing how the music resonates with people around the world. From late-night study sessions to meditation practices, from creative work to emotional processing—ReplayNeonPulse's soundscapes have found their way into the meaningful moments of listeners' lives.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  This connection drives the continued evolution of the sound, pushing boundaries while staying true to the core mission: creating music that matters, music that moves, music that stays with you long after the final note fades.
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
