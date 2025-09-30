import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled 
          ? "py-6 bg-background/40 backdrop-blur-2xl backdrop-saturate-300 shadow-2xl" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-2xl md:text-3xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-foreground">Krishna</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-9">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-lg text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "hover:bg-primary/10",
              "focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "hover:bg-primary/10",
              "focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 rounded-md hover:bg-card/50 transition-colors duration-300 relative"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
            className={cn(
                "fixed top-0 right-0 w-60 bg-background/95 backdrop-blur-2xl z-30",
                "shadow-2xl border-l border-border/20 overflow-hidden",
                "transition-all duration-300 md:hidden",
                isMenuOpen
                ? "opacity-100 pointer-events-auto translate-x-0"
                : "opacity-0 pointer-events-none translate-x-full"
            )}
            style={{ position: 'fixed' }}
            >
            <div className="pt-14 pb-2 px-0">
                {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.href}
                    className="block text-base text-foreground/80 hover:text-primary hover:bg-primary/5 
                            transition-colors duration-300 font-medium py-2 px-3 rounded-lg w-full mb-1"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.name}
                </a>
                ))}
            </div>
        </div>

        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-black/20 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{ position: 'fixed' }}
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
};
