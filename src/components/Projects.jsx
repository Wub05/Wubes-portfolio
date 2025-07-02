import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IMAGES } from "../assets/images";
import { BANNER_IMG } from "../assets/banners";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Apple Clone",
    tags: ["HTML 5", "Bootstrap", "ReactJs", "JQuery", "YouTube API"],
    description:
      "A responsive front-end clone of Apple’s official website. It replicates the sleek layout, and interactive elements of Apple’s homepage to practice modern UI/UX design and responsive development techniques.",
    live: "https://appleclone-v2.onrender.com/",
    github: "https://github.com/Wub05/Apple-Clone",
    image: BANNER_IMG.APPLE,
  },
  {
    title: "Neflix Clone",
    tags: ["TailwindCss", "ReactJs", "TMDB API", "onRender deploy"],
    description:
      "A responsive Netflix-inspired web app built with featuring dynamic content fetched from the TMDB API. It displays trending movies, categories, and posters in a modern UI, closely mimicking Netflix’s layout and user experience.",
    live: "https://netflix-clone-6kk0.onrender.com/",
    github: "https://github.com/Wub05/Netflix-Clone",
    image: BANNER_IMG.NETFLIX,
  },
  {
    title: "Amazon Clone",
    tags: [
      "HTML 5",
      "TailwindCss",
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "Stripe",
      "Firebase",
      "FakeStore API",
      "OnRender deploy",
    ],
    description:
      "An e-commerce website clone inspired by Amazon. It uses the FakeStore API to display real-time product listings with features like product browsing, category filtering, and a responsive UI",
    live: "https://amazon-clone-fullstack-v3.onrender.com/",
    github: "https://github.com/Wub05/Amazon-Clone-Fullstack",
    image: BANNER_IMG.AMAZON2,
  },
  {
    title: "Evangadi Forum",
    tags: [
      "HTML 5",
      "CSS 3",
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MySQL",
      "Git Collabration with Team",
      "OnRender deploy",
    ],
    description:
      "A full-stack MERN web application inspired by Evangadi Tech, where authenticated users can log in and authorized users can post questions and answers. It includes secure user authentication, password reset functionality via email tokens, and a responsive, user-friendly interface.",
    live: "https://wube05-eva-forum.diladev.com/",
    github: "https://github.com/Abi-gitgit/Evangadi_Forum",
    image: BANNER_IMG.FORUM,
  },
];

const ProjectsSection = ({ id }) => (
  <section
    id={id}
    className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0d1f1d] text-white relative overflow-hidden rounded-2xl"
  >
    {/* Ambient 3D glow blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl bottom-0 right-0 animate-ping" />
      <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl top-10 right-1/4 animate-blob animation-delay-3000" />
    </div>

    <h2 className="relative z-10 text-center text-5xl font-extrabold text-emerald-400 mb-20 drop-shadow-lg tracking-wide">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 infinity:grid-cols-3 gap-12 relative z-10">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ scale: 1.03, y: -10, rotateX: 2 }}
          className="relative group perspective bg-gradient-to-br max-lg:max-w-[200px] max-md:mx-auto
           from-gray-900/20 to-gray-800/30 p-6 rounded-3xl backdrop-blur-xl border border-emerald-400/20 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-700 transform-gpu"
        >
          {/* Neon corner effect */}
          <div className="absolute top-0 right-0 w-22 h-32  bg-gradient-to-tr from-emerald-500/20 to-purple-500/10 rounded-bl-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 border-[3px] border-red" />

          <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover  rounded-xl mb-4 border border-emerald-600/30 shadow-lg shadow-emerald-900"
          />
          <h3 className="text-3xl font-bold text-emerald-300 mb-4 drop-shadow-md">
            {p.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 bg-gradient-to-br from-emerald-800 to-emerald-600 text-white rounded-full shadow-md shadow-emerald-900 animate-pulse"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            {p.description}
          </p>
          <div className="flex justify-between items-center text-sm">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 hover:text-white transition"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 hover:text-white transition"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
