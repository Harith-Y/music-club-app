'use client';

import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  children: ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
