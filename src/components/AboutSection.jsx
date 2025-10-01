export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-start">

        {/* Left Column: About Me & Personal Details */}
        <div className="space-y-8">
          {/* About Me */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Sarah</span>, a technology enthusiast with a strong passion for both hardware and software. I love designing and building projects that bridge the physical and digital worlds — from embedded systems, electronics, and IoT devices to software applications, AI models, and intelligent systems. My work spans hands-on experimentation with circuits and sensors, programming, machine learning, and developing real-world solutions that make a meaningful impact. I thrive on learning, problem-solving, and turning ideas into functional, innovative projects.
            </p>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Personal Details
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Name: Sarah Thomas<br/>
              Email: sarah.bijimon@gmail.com<br/>
              Phone: +91 9663995652<br/>
              Location: Bangalore, India
            </p>
          </div>
        </div>

        {/* Right Column: Academic Background & Career Aspirations */}
        <div className="space-y-8">
          {/* Academic Background */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Academic Background
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              B.Tech in Electronics & Computer Engineering, Amrita Vishwa Vidyapeetham,Bangalore<br/>
              Relevant Coursework: Embedded Systems, IoT, Artifical Intelligence and Machine Learning, Software Development,VLSI,Computer Networks
            </p>
          </div>

          {/* Career Aspirations */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Career Aspirations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To innovate at the intersection of hardware and software, building intelligent systems and smart solutions that create meaningful impact in technology and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
