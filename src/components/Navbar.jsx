import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-lg"
          : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl md:text-3xl font-extrabold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-gradient">Riffa</span>{" "}
            <span className="ml-1 text-foreground">Faturahman</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}

          {/* Theme toggle di desktop */}
          
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
           
          </div>
        </div>
      </div>
    </nav>
  );
};
