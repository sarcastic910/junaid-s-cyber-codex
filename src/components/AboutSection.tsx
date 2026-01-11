import { Shield, Code, Brain, Target } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Understanding how attackers think to build better defenses',
  },
  {
    icon: Code,
    title: 'Hands-On Builder',
    description: 'Learning by creating, breaking, and rebuilding systems',
  },
  {
    icon: Brain,
    title: 'Deep Thinker',
    description: 'Focused on why things work, not just how they work',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Continuous improvement with practical project-based learning',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="card-spidey p-8 hover-lift">
              <h3 className="font-display text-3xl text-foreground mb-4">
                WHO I AM
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Junaid Manzoor, a BCA student in my 4th semester with a deep passion for Cyber Security, 
                system design, and hands-on technical exploration. I don't just learn concepts—I actively 
                test them by building, breaking, and rebuilding systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach is simple: <span className="text-primary font-semibold">learn deeply, 
                build practically, and improve continuously.</span>
              </p>
            </div>

            <div className="card-spidey p-8 hover-lift">
              <h3 className="font-display text-3xl text-foreground mb-4">
                MY PHILOSOPHY
              </h3>
              <blockquote className="border-l-4 border-primary pl-6 italic text-spidey-web/80">
                "I believe cybersecurity is not about tools—it's about thinking clearly under complexity. 
                Strong security comes from understanding systems deeply, questioning assumptions, 
                and constantly learning."
              </blockquote>
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-spidey p-6 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-xl text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
