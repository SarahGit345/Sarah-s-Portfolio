import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-12 flex flex-wrap justify-between items-center transition-colors duration-500">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} SarahThomas.co. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-3 rounded-full bg-purple-100/30 dark:bg-purple-700/20 text-purple-600 dark:text-purple-400 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/40 dark:hover:shadow-purple-500/50 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
