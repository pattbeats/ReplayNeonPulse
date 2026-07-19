
import React from 'react';
import { Music, Play, Radio, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

function StreamingLinks({ className = "" }) {
  const platforms = [
    { name: 'Spotify', icon: Music, url: 'https://open.spotify.com/artist/replayneonpulse', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Apple Music', icon: Play, url: 'https://music.apple.com/artist/replayneonpulse', color: 'bg-pink-600 hover:bg-pink-700' },
    { name: 'YouTube Music', icon: Radio, url: 'https://music.youtube.com/channel/replayneonpulse', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'SoundCloud', icon: Cloud, url: 'https://soundcloud.com/replayneonpulse', color: 'bg-orange-600 hover:bg-orange-700' }
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {platforms.map((platform) => {
        const Icon = platform.icon;
        return (
          <Button
            key={platform.name}
            asChild
            className={`${platform.color} text-white transition-all duration-200 active:scale-[0.98]`}
          >
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              <Icon className="w-4 h-4 mr-2" />
              {platform.name}
            </a>
          </Button>
        );
      })}
    </div>
  );
}

export default StreamingLinks;
