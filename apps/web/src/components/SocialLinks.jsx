
import React from 'react';
import { Instagram, Music2, Youtube } from 'lucide-react';

function SocialLinks({ className = "" }) {
  const socials = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/replayneonpulse', color: 'hover:text-pink-400' },
    { name: 'TikTok', icon: Music2, url: 'https://tiktok.com/@replayneonpulse', color: 'hover:text-orange-300' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@replayneonpulse', color: 'hover:text-red-400' }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`transition-all duration-300 ${social.color}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
