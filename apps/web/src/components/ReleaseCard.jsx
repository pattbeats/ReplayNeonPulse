
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import StreamingLinks from './StreamingLinks';

function ReleaseCard({ title, artist, releaseDate, description, imageUrl, audioUrl, reverse = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="relative group atmospheric-glow">
          <img
            src={imageUrl}
            alt={title}
            className="w-full aspect-square object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Button
            onClick={togglePlay}
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-[0.98]"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </Button>
        </div>
      </div>
      
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">{artist} • {releaseDate}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-card-foreground/80">{description}</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 mt-auto">
            <audio
              ref={audioRef}
              src={audioUrl}
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
            <StreamingLinks />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default ReleaseCard;
