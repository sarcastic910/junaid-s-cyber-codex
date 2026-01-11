import { Key, Shield, Wrench, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    icon: Key,
    title: 'Authentication Systems',
    description: 'Designed and explored ID-based authentication logic. Worked on understanding how user identity, validation, and access control function in systems.',
    tags: ['Identity', 'Validation', 'Access Control'],
    focus: 'Security weaknesses and improvement ideas',
  },
  {
    icon: Shield,
    title: 'Firewall Logic Experiments',
    description: 'Studied firewall behavior and rule-based filtering concepts. Explored how traffic is allowed, blocked, or monitored.',
    tags: ['Firewalls', 'Traffic Control', 'Rule-Based'],
    focus: 'Defensive use cases rather than exploitation',
  },
  {
    icon: Wrench,
    title: 'Learning-Oriented Builds',
    description: 'Created small systems and prototypes to test cybersecurity concepts. Used projects as a way to validate understanding instead of memorization.',
    tags: ['Prototyping', 'Testing', 'Iteration'],
    focus: 'Iteratively improved designs after identifying flaws',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-spidey-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            PROJECTS & WORK
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            "These projects are not built for show—they're built to learn how real systems think."
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-spidey hover-lift cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-primary via-spidey-glow to-primary" />
              
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Focus */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">
                    🎯 Focus: {project.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-muted-foreground">
              More projects coming as I continue to learn and build
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
