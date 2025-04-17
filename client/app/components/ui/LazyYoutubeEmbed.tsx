'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface LazyYoutubeEmbedProps {
  youtubeUrl: string;
  title: string;
}

export default function LazyYoutubeEmbed({ youtubeUrl, title }: LazyYoutubeEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setShouldLoad(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full aspect-video relative bg-gray-800 rounded-lg overflow-hidden">
      {shouldLoad ? (
        <iframe
          src={youtubeUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse bg-gray-700 w-full h-full" />
        </div>
      )}
    </div>
  );
} 