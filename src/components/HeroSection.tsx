import { useEffect, useState } from 'react';
import SpiderIcon from './SpiderIcon';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden halftone">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-spidey-red/10 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-spidey-blue/10 via-transparent to-spidey-red/10 pointer-events-none" />

      {/* Animated spider icon */}
      <div
        className="absolute top-20 right-[15%] animate-web-swing opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      >
        <SpiderIcon className="w-32 h-32 text-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Cyber Security Enthusiast
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 animate-slide-up"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            }}
          >
            <span className="text-foreground">JUNAID</span>
            <br />
            <span className="text-gradient glow-text">MANZOOR</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            BCA Student • System Builder • Defender
          </p>

          {/* Quote */}
          <p className="text-lg text-spidey-web/80 italic mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            "With great power comes great responsibility... to secure the web."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-display text-xl uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-red"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-spidey-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 border-2 border-primary/50 text-foreground font-display text-xl uppercase tracking-wider rounded-lg transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
