import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { PROFILE_IMG } from "../assets";

//  Hero section component
const HeroSection = ({ id }) => {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Ref for 3D tilt card container
  const containerRef = useRef(null);

  // State to handle card transform styles
  const [tiltStyle, setTiltStyle] = useState({});

  // 🔁 Mouse movement logic to rotate image card
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`,
    });
  };

  // 🔁 Reset rotation on mouse leave
  const handleMouseLeave = () => {
    setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  };

  return (
    <section
      id={id}
      className="relative w-full mx-auto px-4 md:px-6 py-24 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start justify-between gap-28 md:gap-36">
        {/* 🔹 LEFT TEXT SECTION */}
        <motion.div
          className="w-full text-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 🟢 Availability Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 outline outline-1 p-3 rounded-xl w-[50%]">
            <div className="w-3.5 h-3.5 bg-emerald-400 rounded-full animate-pulse shadow-md shadow-emerald-500/60" />
            <p className="text-sm text-emerald-400 font-medium">
              Available for hire
            </p>
          </div>

          {/* 🔠 Name and Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg max-w-full">
            <span className="text-2xl font-mono">Hello, I'm</span> Wubishet T.
          </h1>

          {/* 💬 Short Description */}
          <p className="text-xl md:text-2xl text-gray-300 mt-6 leading-relaxed max-w-3xl">
            Junior Full-Stack Developer & AI Enthusiast building practical and
            user-friendly web experiences with a focus on clean code, automation
            basics, and learning-driven development in full-stack and AI
            technologies.
          </p>

          {/* 📂 Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-6">
            {/* Download Resume */}
            <motion.a
              href="/sample_resume.pdf"
              download
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg shadow-md hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-emerald-500/30"
            >
              Download Resume
            </motion.a>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 text-black font-semibold rounded-lg shadow-xl hover:from-cyan-500 hover:to-emerald-400 transition-all duration-300"
            >
              Let's Talk <span className="animate-ping ml-1">💬</span>
            </motion.a>
          </div>
        </motion.div>

        {/* 🔹 RIGHT IMAGE CARD WITH TILT */}
        <motion.div
          ref={containerRef}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-300 ease-out border-4 border-transparent bg-clip-padding bg-black"
          style={tiltStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        >
          {/* ✨ Blurred Gradient Border Glow */}
          <div className="absolute inset-0 z-10 rounded-[2rem] border-[3px] border-transparent bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-600 blur-md opacity-30 animate-pulse" />

          {/* 🖼️ Profile Image */}
          <img
            src={PROFILE_IMG.BANNER_PROFILE}
            alt="Profile"
            className="w-full h-full object-cover rounded-[2rem] relative z-20"
            draggable={false}
          />

          {/* 🔮 Glowing Animated Blobs */}
          <div className="absolute top-0 -left-6 w-48 h-48 bg-emerald-400 rounded-full mix-blend-lighten filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-12 -right-6 w-48 h-48 bg-purple-600 rounded-full mix-blend-lighten filter blur-3xl opacity-25 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-12 left-16 w-48 h-48 bg-cyan-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
