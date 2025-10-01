import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
        "fixed w-full top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="text-2xl font-bold text-purple-600 dark:text-purple-400 hover:opacity-90 transition-opacity"
        >
          Sarah<span className="text-gray-700 dark:text-gray-300">.Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-100 font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-800 dark:text-gray-100 z-50 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-xl font-medium text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
