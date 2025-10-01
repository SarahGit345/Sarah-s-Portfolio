import { useState } from "react";
import { ArrowRight, ExternalLink, Github, ArrowLeft } from "lucide-react";
import { CheckCircle, Clock } from "lucide-react"; // Icons for Completed & In Progress

export const projects = [
  // Completed Projects
  {
    id: 2,
    title: "ML-Based Chronic Fatigue Syndrome (CFS) Detection",
    description: "Predicts Chronic Fatigue Syndrome using patient clinical and sensor data.",
    image: "/projects/cfs.png",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    id: 3,
    title: "IoT Health Monitoring System",
    description: "Real-time monitoring of heart rate, SpO₂, blood pressure, and temperature with cloud integration.",
    image: "/projects/iot-health.png",
    tags: ["ESP32", "MAX30102", "HX711", "ThingSpeak", "IoT"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    id: 4,
    title: "PacketWatch: Network Monitoring & Intrusion Detection",
    description: "Monitors network traffic, detects anomalies, and raises alerts for suspicious activity.",
    image: "/projects/packetwatch.png",
    tags: ["Python", "Scapy", "Wireshark", "Flask", "Dashboard"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },

  // In Progress Projects
  {
    id: 1,
    title: "AI-Powered Drone vs Bird Classifier",
    description: "Real-time detection of drones vs birds using camera, radar, and acoustic data.",
    image: "/projects/drone-bird.png",
    tags: ["Python", "OpenCV", "PyTorch", "Raspberry Pi", "Jetson Nano"],
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress",
  },
  {
    id: 5,
    title: "FPGA-Based Neuromorphic Tactile Feedback Hand",
    description: "Robotic hand with tactile sensors and camera feedback controlled by FPGA using spiking neural networks.",
    image: "/projects/fpga-hand.jpg",
    tags: ["FPGA", "Tactile Sensors", "OpenCV", "Neuromorphic Computing", "Robotics"],
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Mental Health Student Analysis & Networking",
    description: "Analyzes student mental health data and provides networking with counselors.",
    image: "/projects/mental-health.png",
    tags: ["Python", "Django", "Pandas", "Networking", "Analytics"],
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="absolute left-0 z-10 p-3 bg-purple-500/70 text-white rounded-full hover:bg-purple-600 transition"
          >
            <ArrowLeft size={24} />
          </button>

          {/* Project Card */}
          <div className="w-full max-w-3xl">
            <div className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-purple-400/40 dark:hover:shadow-purple-500/40 transition-all duration-500">
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                    projects[currentIndex].status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {projects[currentIndex].status === "Completed" ? <CheckCircle size={16} /> : <Clock size={16} />}
                  {projects[currentIndex].status}
                </span>
              </div>

              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {projects[currentIndex].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border border-purple-300 dark:border-purple-600 rounded-full bg-purple-100/40 dark:bg-purple-700/20 text-purple-800 dark:text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{projects[currentIndex].title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{projects[currentIndex].description}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={projects[currentIndex].demoUrl}
                    target="_blank"
                    className="text-gray-800/80 dark:text-gray-200/80 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={projects[currentIndex].githubUrl}
                    target="_blank"
                    className="text-gray-800/80 dark:text-gray-200/80 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="absolute right-0 z-10 p-3 bg-purple-500/70 text-white rounded-full hover:bg-purple-600 transition"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-400/40 dark:hover:shadow-purple-500/50 transition-all duration-300"
            target="_blank"
            href="https://github.com/SarahGit345/SarahGit345"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
