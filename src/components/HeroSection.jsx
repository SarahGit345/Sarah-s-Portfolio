import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import myPhoto from "../assets/myPhoto.jpg"; // replace with your image

export const HeroSection = () => {
  const fullText =
    "A  tech enthusiast passionate about building smart solutions that combine hardware, software, and AI to solve real-world problems.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight overflow-hidden">
            <span className="block">Hi, I'm</span>
            <span className="block text-purple-600 dark:text-purple-400">Sarah</span>
          </h1>

          {/* Typewriter Text */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed h-auto whitespace-pre-wrap">
            {displayText}
            <span className="border-r-2 border-gray-700 dark:border-gray-300 animate-blink ml-1"></span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg shadow-lg hover:shadow-purple-400/40 dark:hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get In Touch
            </a>

            <a
               href="/files/Sarah_Thomas_Resume.pdf"
               download
              className="px-8 py-4 rounded-full border border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-100/40 dark:hover:bg-purple-700/20 text-lg transition-colors duration-300"
            >
               Download CV
            </a>
          </div>
        </div>

        {/* Photo Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white/30 backdrop-blur-md transform hover:scale-105 transition duration-500">
            <img src={myPhoto} alt="Sarah" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Scroll</span>
        <ArrowDown className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </div>

      {/* Cursor Animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
    </section>
  );
};
