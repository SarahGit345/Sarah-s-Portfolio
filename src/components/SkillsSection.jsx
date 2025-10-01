import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Database
  { name: "Oracle", level: 75, category: "database" },
  { name: "SQL Server", level: 70, category: "database" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Hardware / Embedded / AI
  { name: "VLSI", level: 75, category: "hardware" },
  { name: "FPGA", level: 80, category: "hardware" },
  { name: "Verilog", level: 70, category: "hardware" },
  { name: "AI/ML", level: 85, category: "ai" },
  { name: "IoT", level: 80, category: "embedded" },
  { name: "Assembly Language", level: 65, category: "embedded" },
  { name: "Arduino", level: 85, category: "embedded" },
];

const categories = ["all", "frontend", "backend", "database", "tools", "hardware", "ai", "embedded"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white transition-colors duration-500"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          A collection of technologies and domains I specialize in — from software to hardware, AI/ML, IoT, and embedded systems.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/40"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Hexagon Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "hexagon bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-md transition-all duration-500 hover:scale-105 flex flex-col items-center justify-center text-center",
                skill.category === "ai" ? "hover:shadow-purple-500/70" :
                skill.category === "hardware" ? "hover:shadow-orange-500/70" :
                skill.category === "embedded" ? "hover:shadow-green-500/70" :
                skill.category === "frontend" ? "hover:shadow-blue-500/70" :
                skill.category === "backend" ? "hover:shadow-teal-500/70" :
                skill.category === "database" ? "hover:shadow-yellow-500/70" :
                skill.category === "tools" ? "hover:shadow-pink-500/70" :
                "hover:shadow-purple-500/70"
              )}
            >
              <h3 className="font-semibold text-lg text-white mb-2">{skill.name}</h3>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon Glow CSS */}
      <style>{`
        .hexagon {
          clip-path: polygon(
            25% 5%, 75% 5%,
            100% 50%, 75% 95%,
            25% 95%, 0% 50%
          );
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px 2px rgba(155, 93, 229, 0.2);
        }
        .hexagon:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
