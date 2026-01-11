import { useState } from 'react';
import { Mail, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import SpiderIcon from './SpiderIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:junaid@example.com' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating or just want to say hello? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <div className="card-spidey p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full py-4 bg-primary text-primary-foreground font-display text-xl uppercase tracking-wider rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] glow-red"
              >
                <span>Send Message</span>
                <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <SpiderIcon className="w-24 h-24 text-primary mx-auto lg:mx-0 animate-float opacity-50" />
            </div>
            
            <h3 className="font-display text-3xl text-foreground mb-4 text-center lg:text-left">
              LET'S CONNECT
            </h3>
            
            <p className="text-muted-foreground mb-8 text-center lg:text-left leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of something amazing in the cybersecurity space.
            </p>
            
            {/* Social links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-3 px-6 py-3 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{link.label}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
