import { useState, useEffect } from 'react';
import SpiderIcon from './SpiderIcon';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Goals', href: '#goals' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <SpiderIcon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="font-display text-2xl text-foreground tracking-wider">
              JUNAID<span className="text-primary">.</span>
            </span>
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium text-sm uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2 group">
            <span className="w-6 h-0.5 bg-foreground transition-transform group-hover:bg-primary" />
            <span className="w-6 h-0.5 bg-foreground transition-transform group-hover:bg-primary" />
            <span className="w-4 h-0.5 bg-foreground transition-transform group-hover:bg-primary group-hover:w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
