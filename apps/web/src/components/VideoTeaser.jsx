
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

function VideoTeaser({ videoUrl, thumbnailUrl, thumbnailWebpUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden atmospheric-glow">
      {!isPlaying ? (
        <>
          <picture className="block size-full">
            {thumbnailWebpUrl && (
              <source srcSet={thumbnailWebpUrl} type="image/webp" />
            )}
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              decoding="async"
            />
          </picture>
          <Button
            onClick={() => setIsPlaying(true)}
            variant="ghost"
            size="icon"
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 text-white/50 hover:bg-white/15 hover:text-white/70 hover:border-white/35 shadow-none transition-all duration-300 active:scale-[0.98]"
          >
            <Play className="w-7 h-7 ml-0.5" />
          </Button>
        </>
      ) : (
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default VideoTeaser;
