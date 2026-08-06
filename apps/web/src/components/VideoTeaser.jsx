
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

function VideoTeaser({ videoUrl, thumbnailUrl, thumbnailWebpUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden atmospheric-glow bg-black">
      {!isPlaying ? (
        <>
          <picture className="block size-full bg-black">
            {thumbnailWebpUrl && (
              <source srcSet={thumbnailWebpUrl} type="image/webp" />
            )}
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-contain bg-black"
              decoding="async"
            />
          </picture>
          <Button
            onClick={() => setIsPlaying(true)}
            variant="ghost"
            size="icon"
            aria-label="Play video"
            className="absolute top-[64%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[50px] rounded-xl bg-[#FF0000] hover:bg-[#CC0000] text-white border-0 shadow-lg shadow-black/40 transition-all duration-300 active:scale-[0.98]"
          >
            <Play className="w-8 h-8 ml-0.5 fill-white" strokeWidth={0} />
          </Button>
        </>
      ) : (
        <iframe
          src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
}

export default VideoTeaser;
