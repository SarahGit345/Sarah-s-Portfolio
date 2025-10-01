import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full transition-all duration-500",
        "bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-lg",
        "hover:scale-110 hover:shadow-purple-400/40 dark:hover:shadow-purple-500/50",
        "focus:outline-none focus:ring-2 focus:ring-purple-400/50"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-500 rotate-180" />
      ) : (
        <Moon className="h-6 w-6 text-purple-700 transition-transform duration-500 -rotate-12" />
      )}
    </button>
  );
};
