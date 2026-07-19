
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReleaseCard from '@/components/ReleaseCard';

function LatestReleasesPage() {
  const releases = [
    {
      title: 'Midnight Echoes',
      artist: 'ReplayNeonPulse',
      releaseDate: 'March 2026',
      description: 'A haunting exploration of nocturnal soundscapes, blending ethereal synths with deep bass textures. This track captures the quiet intensity of late-night introspection.',
      imageUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909',
      audioUrl: '#'
    },
    {
      title: 'Neon Dreams',
      artist: 'ReplayNeonPulse',
      releaseDate: 'January 2026',
      description: 'Pulsing rhythms meet shimmering melodies in this cyberpunk-inspired composition. A sonic journey through neon-lit cityscapes and digital horizons.',
      imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89',
      audioUrl: '#'
    },
    {
      title: 'Silent Storm',
      artist: 'ReplayNeonPulse',
      releaseDate: 'November 2025',
      description: 'Dramatic orchestral elements collide with modern electronic production. This piece builds from whispered beginnings to thunderous crescendos.',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
      audioUrl: '#'
    },
    {
      title: 'Velvet Horizon',
      artist: 'ReplayNeonPulse',
      releaseDate: 'September 2025',
      description: 'Smooth, atmospheric textures create a sense of endless space. Perfect for moments of reflection and contemplation.',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
      audioUrl: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Latest Releases - ReplayNeonPulse`}</title>
        <meta name="description" content="Explore the latest cinematic music releases from ReplayNeonPulse. Stream now on Spotify, Apple Music, YouTube Music, and SoundCloud." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-b from-background to-muted">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Latest Releases
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Discover the newest electronic soundscapes from ReplayNeonPulse
              </p>
            </div>

            <div className="space-y-24">
              {releases.map((release, index) => (
                <ReleaseCard
                  key={index}
                  {...release}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LatestReleasesPage;
