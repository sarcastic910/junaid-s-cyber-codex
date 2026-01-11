import { Rocket, Target, Award, Zap } from 'lucide-react';

const shortTermGoals = [
  'Strengthen core cybersecurity foundations',
  'Build more security-focused practical projects',
  'Improve documentation and technical communication',
  'Prepare for internships or entry-level security roles',
];

const longTermGoals = [
  'Become a skilled Cyber Security professional',
  'Work on real-world defensive systems',
  'Specialize in security architecture or blue-team roles',
  'Build tools that improve security, not just test it',
];

const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 halftone opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            GOALS & VISION
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Short-term goals */}
          <div className="card-spidey p-8 hover-lift group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-3xl text-foreground">SHORT-TERM</h3>
            </div>
            
            <ul className="space-y-4">
              {shortTermGoals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground group/item cursor-pointer hover:text-foreground transition-colors duration-300"
                >
                  <Zap className="w-5 h-5 text-primary mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Long-term goals */}
          <div className="card-spidey p-8 hover-lift group comic-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-3xl text-foreground">LONG-TERM</h3>
            </div>
            
            <ul className="space-y-4">
              {longTermGoals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground group/item cursor-pointer hover:text-foreground transition-colors duration-300"
                >
                  <Award className="w-5 h-5 text-primary mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Journey statement */}
        <div className="mt-16 text-center">
          <div className="inline-block card-spidey p-8 max-w-2xl">
            <p className="text-xl text-spidey-web/80 italic font-display tracking-wide">
              "This portfolio represents my journey, not a finish line."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
