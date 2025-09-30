import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border mt-8 pt-4 flex justify-between items-center">
      <div></div>
      <p className="text-base text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Saikam Krishna Reddy. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={23} />
      </a>
    </footer>
  );
};

