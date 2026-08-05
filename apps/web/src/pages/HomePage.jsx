
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, AudioWaveform, Disc3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoTeaser from '@/components/VideoTeaser';
import NewsletterForm from '@/components/NewsletterForm';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>ReplayNeonPulse - Soundscapes</title>
        <meta name="description" content="Experience soundscapes that move the soul. Discover the latest releases and upcoming music from ReplayNeonPulse." />
      </Helmet>

      <Header />

      <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 min-h-full">
          <picture className="absolute inset-0 block size-full">
            <source srcSet="/images/hero/hero-neonpulse.webp" type="image/webp" />
            <img
              src="/images/hero/Replay_03.jpg"
              alt="ReplayNeonPulse"
              className="absolute inset-0 size-full object-cover object-[68%_40%] sm:object-[72%_40%] lg:object-[78%_42%]"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 from-0% via-background/75 via-45% to-background/15 to-100%" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        </div>

        <div className="hero-content relative container-custom z-10 w-full px-4 sm:px-6 lg:px-8 translate-y-[152px] md:translate-y-[168px] lg:translate-y-[176px]">
          <div className={`max-w-xl lg:max-w-2xl text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="hero-title replayneonpulse-brand text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 md:mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
            Replay
            <br />
            NeonPulse
            </h1>
            <p className="hero-tagline replayneonpulse-tagline text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/85 mb-8 md:mb-10 max-w-lg leading-snug">
             Electronic journeys beyond the ordinary
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                <Link to="/upcoming">Explore Music</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted transition-all duration-200 active:scale-[0.98]">
                <Link to="/story">Discover the Story</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-foreground/60" />
        </div>
      </section>

      <section className="py-24 md:py-28 lg:py-32 bg-background border-t border-border/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-muted/40 text-muted-foreground mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium tracking-wide">Behind ReplayNeonPulse</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-6 leading-tight tracking-tight">
              Two creators. One sound vision.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/75 max-w-2xl mx-auto">
              Replay and NeonPulse are two creators connected by a passion for deep, driving and minimal electronic music. Different roles. One shared mission: music that moves, connects and stays with you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-24 max-w-6xl mx-auto mb-16 md:mb-20 lg:mb-24">
            {[
              {
                name: 'REPLAY',
                role: 'DJ & Live Curator',
                text: 'Crafting immersive DJ sets that blend deep basslines, high tech grooves and minimal vibes. Every set is a journey designed to connect and energize the dancefloor.',
                imageSrc: '/images/hero/DJ_Replay_for_Home.jpg',
                imageAlt: 'Replay DJ performance'
              },
              {
                name: 'NEONPULSE',
                role: 'Producer & Sound Designer',
                text: 'Creating original tracks with deep bass, minimal structures and hypnotic soundscapes. From high tech techno to minimal rhythms — always with emotion and groove in mind.',
                imageSrc: '/images/hero/Studio_NeonPulse_for_Home.jpg',
                imageAlt: 'NeonPulse in the studio'
              }
            ].map((profile) => (
              <div
                key={profile.name}
                className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start text-center sm:text-left"
              >
                <div className="shrink-0 size-36 sm:size-40 md:size-44 lg:size-48 rounded-full overflow-hidden border border-border/50">
                  <img
                    src={profile.imageSrc}
                    alt={profile.imageAlt}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="replayneonpulse-brand text-primary text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl tracking-wide uppercase mb-3 md:mb-4">
                    {profile.name}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 leading-snug">
                    {profile.role}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/70">
                    {profile.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-14 md:mb-16 lg:mb-20 text-center">
            <div className="mx-auto mb-6 h-px w-16 bg-primary/60" />
            <p className="text-base sm:text-lg leading-relaxed text-foreground/75 px-4">
              Together we explore the space between underground energy and melodic emotion. Our sound is electronic – raw, deep and real.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: AudioWaveform,
                label: 'SOUND',
                title: 'Deep. Driving. Minimal.',
                detail: 'Deep Bass • High Tech • Minimal Techno'
              },
              {
                icon: Disc3,
                label: 'EXPERIENCE',
                title: 'DJ Sets & Live Performances',
                detail: 'Electronic • Music'
              },
              {
                icon: Users,
                label: 'VISION',
                title: 'Beyond the Dancefloor',
                detail: 'Music that connects people and places'
              }
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="rounded-2xl border border-border/50 bg-card/30 p-7 md:p-8 text-center transition-colors duration-300 hover:border-primary/25 hover:bg-card/50"
                >
                  <Icon className="w-6 h-6 text-primary mb-5 mx-auto" strokeWidth={1.5} />
                  <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                    {feature.label}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Live Mix</h2>
            <p className="text-lg text-muted-foreground">Deep Bass • Hypnotic Minimal Techno</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <VideoTeaser
              videoUrl="https://www.youtube.com/embed/RqZEpVAaDCs"
              thumbnailUrl="/videos/replayneonpulse-live-mix-thumbnail.jpg"
              title="DJ ReplayNeonPulse | Live Mix | Deep Bass & Hypnotic Minimal Techno"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Journey</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Be the first to hear new releases, get exclusive content, and stay connected with the ReplayNeonPulse.
            </p>
            <NewsletterForm className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
