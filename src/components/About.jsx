import { motion } from "framer-motion";

const AboutSection = ({ id, setActiveSection }) => {
  return (
    <section
      id={id}
      setActiveSection={setActiveSection}
      className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-4xl p-10 md:p-16 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl shadow-emerald-600/10 relative overflow-hidden"
      >
        {/* Floating Gradient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-emerald-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-400 opacity-20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 drop-shadow-md"
        >
          Who Am I?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
        >
          I'm a passionate developer with a strong eye for design, performance,
          and digital craftsmanship. I specialize in creating seamless user
          experiences that not only look good but feel intuitive and responsive.
          <span className="text-emerald-400 font-medium">
            {" "}
            I also build intelligent AI agents that automate workflows, enhance
            decision-making, and create powerful user interactions.
          </span>
          I love blending code with creativity to build experiences that leave a
          lasting impression.
        </motion.p>

        {/* Skills or Highlights */}
        <motion.ul
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-gray-300 text-sm md:text-base"
        >
          <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-emerald-500/10 transition">
            ⚡ Full-stack Development
          </li>

          <li className="relative rounded-xl px-4 py-3 transition overflow-hidden border border-white/10 bg-gradient-to-r from-purple-600 via-emerald-500 to-blue-500 text-white font-semibold shadow-md animate-pulse">
            <span className="relative z-10">🤖 AI Agents Automation</span>
            <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-emerald-500 via-blue-500 to-cyan-500 blur-xl rounded-xl"></div>
          </li>

          <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-emerald-500/10 transition">
            🚀 Performance Optimization
          </li>
          <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-emerald-500/10 transition">
            📚 Continuous Learning & Growth
          </li>
        </motion.ul>

        {/* CTA Button */}
        <motion.a
          href="/sample_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-400/40"
        >
          View My Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
