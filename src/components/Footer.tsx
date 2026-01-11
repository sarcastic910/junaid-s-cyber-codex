import SpiderIcon from './SpiderIcon';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SpiderIcon className="w-8 h-8 text-primary" />
            <span className="font-display text-xl text-foreground tracking-wider">
              JUNAID MANZOOR
            </span>
          </div>

          {/* Quote */}
          <p className="text-sm text-muted-foreground text-center italic">
            "With great power comes great responsibility"
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
