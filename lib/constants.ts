import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' }
];

export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Design', href: '#services' },
      { label: 'Development', href: '#development' },
      { label: 'Branding', href: '#branding' },
      { label: 'Marketing', href: '#marketing' }
    ]
  }
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github }
];