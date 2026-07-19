import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const sizeMap = {
  sm: 'size-9',
  md: 'size-10 md:size-11',
  lg: 'size-16 md:size-[4.5rem]'
};

const wordmarkMap = {
  sm: 'text-xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-2xl md:text-3xl'
};

/**
 * RNP mark + optional wordmark lockup.
 * Compact in the header; larger glowing emblem in the footer.
 */
function BrandLogo({
  size = 'md',
  showWordmark = true,
  stacked = false,
  className = ''
}) {
  return (
    <Link
      to="/"
      aria-label="ReplayNeonPulse home"
      className={cn(
        'group inline-flex items-center transition-colors duration-300',
        stacked ? 'flex-col gap-4 text-center' : 'gap-3',
        className
      )}
    >
      <span
        className={cn(
          'relative shrink-0 overflow-hidden rounded-full',
          'ring-1 ring-primary/35',
          'shadow-[0_0_20px_hsl(var(--primary)/0.2)]',
          'transition-all duration-500 ease-out',
          'group-hover:ring-primary/60 group-hover:shadow-[0_0_32px_hsl(var(--primary)/0.4)]',
          'group-hover:scale-[1.03]',
          sizeMap[size]
        )}
      >
        <img
          src="/images/logos/Logo_RNP.jpg"
          alt=""
          width={2308}
          height={2304}
          className="size-full object-cover scale-[1.08]"
          decoding="async"
        />
      </span>

      {showWordmark && (
        <span
          className={cn(
            'replayneonpulse-brand tracking-tight text-foreground',
            'transition-colors duration-300 group-hover:text-primary',
            wordmarkMap[size]
          )}
        >
          ReplayNeonPulse
        </span>
      )}
    </Link>
  );
}

export default BrandLogo;
