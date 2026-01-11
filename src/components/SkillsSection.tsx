import { useState } from 'react';
import { Shield, Lock, Flame, Globe, Code, Server, Bug, Puzzle, Lightbulb, BookOpen, Search, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    id: 'security',
    title: 'Cyber Security',
    icon: Shield,
    color: 'primary',
    skills: [
      { name: 'Security Fundamentals', icon: Shield },
      { name: 'Authentication Systems', icon: Lock },
      { name: 'Firewall Concepts', icon: Flame },
      { name: 'Network Security', icon: Globe },
      { name: 'Threat Awareness', icon: Bug },
      { name: 'Ethical Hacking Mindset', icon: Search },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    icon: Code,
    color: 'accent',
    skills: [
      { name: 'Programming Fundamentals', icon: Code },
      { name: 'Backend Thinking', icon: Server },
      { name: 'Scripting & Automation', icon: Bug },
      { name: 'System Problem Solving', icon: Puzzle },
    ],
  },
  {
    id: 'core',
    title: 'Core Strengths',
    icon: Lightbulb,
    color: 'secondary',
    skills: [
      { name: 'Curiosity-Driven Learning', icon: Search },
      { name: 'Theory to Practice', icon: CheckCircle },
      { name: 'Analytical Thinking', icon: Lightbulb },
      { name: 'Project-Based Learning', icon: BookOpen },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('security');

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            SKILLS & ABILITIES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-display text-lg uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground glow-red scale-105'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 ${
                activeCategory === category.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 hidden'
              }`}
            >
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="card-spidey p-6 hover-lift group cursor-pointer flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <div className="w-full h-1 bg-muted rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-spidey-glow rounded-full transition-all duration-700 group-hover:w-full"
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Currently studying */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card-spidey p-8 comic-border">
            <h3 className="font-display text-2xl text-center text-foreground mb-6">
              📚 CURRENTLY STUDYING
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Cyber Security fundamentals in depth',
                'Network behavior & protection',
                'Secure system design principles',
                'Programming logic & architecture',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
