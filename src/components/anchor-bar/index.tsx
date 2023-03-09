import { useEffect, useState } from 'react';
import { StyledAnchorBar, StyledAnchorLink } from './styles'; 

interface AnchorBarProps {
  direction: string
  size: string
  links: {
    label: string;
    href: string;
  }[];
  scrollDelay?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollToSection = (event: any, delay: number) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth' });
    }, delay);
  }
};

export const AnchorBar = ({ direction, size, links, scrollDelay = 0 }: AnchorBarProps) => {
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean);
      const activeSection = sections.find((section) => {
        const rect = section && section.getBoundingClientRect();
        return rect && rect.top <= 0 && rect.bottom >= 0;
      });

      setActiveLink(activeSection?.id || '');
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <StyledAnchorBar direction={direction} size={size}>
      {links.map((link, index) => (
        <StyledAnchorLink
          key={index}
          href={link.href}
          onClick={(event) => scrollToSection(event, scrollDelay)}
          active={activeLink === (document.querySelector(link.href)?.id || '')}
          direction={direction}
        >
          {link.label}
        </StyledAnchorLink>
      ))}
    </StyledAnchorBar>
  );
};
