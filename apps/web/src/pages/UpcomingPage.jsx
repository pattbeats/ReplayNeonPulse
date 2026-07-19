
import React from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterForm from '@/components/NewsletterForm';

function UpcomingPage() {
  const upcoming = [
    {
      title: 'Cosmic Drift',
      releaseDate: 'July 2026',
      description: 'An ambient journey through celestial soundscapes. Prepare for a transcendent listening experience.',
      status: 'In Production'
    },
    {
      title: 'Urban Pulse',
      releaseDate: 'August 2026',
      description: 'High-energy beats meet electronic production. A fusion of street culture and orchestral grandeur.',
      status: 'Mixing'
    },
    {
      title: 'Echoes of Tomorrow',
      releaseDate: 'October 2026',
      description: 'A concept album exploring themes of time, memory, and the future. The most ambitious project yet.',
      status: 'Pre-Production'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Upcoming Releases - ReplayNeonPulse`}</title>
        <meta name="description" content="Stay tuned for upcoming music releases from ReplayNeonPulse. Be the first to know about new cinematic soundscapes." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section className="relative min-h-[52vh] md:min-h-[58vh] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0 min-h-full">
            <picture className="absolute inset-0 block size-full">
              <source srcSet="/images/artist/upcoming-hero.webp" type="image/webp" />
              <img
                src="/images/artist/upcoming-hero.jpg"
                alt="ReplayNeonPulse live performance in Malaysia"
                className="absolute inset-0 size-full object-cover object-[50%_42%] sm:object-[50%_44%] lg:object-[50%_46%]"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          </div>

          <div className="relative container-custom text-center z-10 px-4 pb-12 md:pb-16 lg:pb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Upcoming Releases
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Get a glimpse of what's next in the ReplayNeonPulse journey
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {upcoming.map((item, index) => (
                <Card key={index} className="bg-card border-border atmospheric-glow transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{item.status}</span>
                    </div>
                    <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.releaseDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-center">Stay in the Loop</CardTitle>
                  <CardDescription className="text-center text-base">
                    Subscribe to get notified when new music drops
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <NewsletterForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UpcomingPage;
