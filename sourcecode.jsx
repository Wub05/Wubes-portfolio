


import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- SVG Icon Components ---
// By embedding the SVGs directly, we remove the dependency that was causing build errors.

const IconWrapper = ({ size = 22, className = "", children, viewBox = "0 0 24 24" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox={viewBox} 
        className={className} 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        {children}
    </svg>
);

const LogoGridIcon = (props) => (
     <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={props.size || 22} 
        height={props.size || 22} 
        viewBox="0 0 24 24" 
        fill="currentColor"
        stroke="none"
    >
        <circle cx="5" cy="5" r="2"></circle>
        <circle cx="12" cy="5" r="2"></circle>
        <circle cx="19" cy="5" r="2"></circle>
        <circle cx="5" cy="12" r="2"></circle>
        <circle cx="19" cy="12" r="2"></circle>
        <circle cx="5" cy="19" r="2"></circle>
        <circle cx="12" cy="19" r="2"></circle>
        <circle cx="19" cy="19" r="2"></circle>
    </svg>
);


const FiMail = (props) => (
    <IconWrapper {...props}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </IconWrapper>
);

const FiEdit2 = (props) => (
    <IconWrapper {...props}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </IconWrapper>
);

const FiBookmark = (props) => (
    <IconWrapper {...props}>
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </IconWrapper>
);

const FiTwitter = (props) => (
    <IconWrapper {...props}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </IconWrapper>
);

const FiUser = (props) => (
    <IconWrapper {...props}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </IconWrapper>
);

const FiGithub = (props) => (
    <IconWrapper {...props} viewBox="0 0 16 16" fill="currentColor" stroke="none">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </IconWrapper>
);

const FiExternalLink = (props) => (
    <IconWrapper {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </IconWrapper>
);

const SkillIcon = ({ children, color, size = 40, className = "" }) => (
    <div className={className} style={{ color: color, width: size, height: size }}>
        {children}
    </div>
);

const DiReact = (props) => (
    <SkillIcon {...props} color="#61DAFB">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
            </g>
        </svg>
    </SkillIcon>
);
const SiFigma = ({ size=40, className="" }) => ( <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}><path fill="#f24e1e" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" opacity=".1"></path><path fill="#f24e1e" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0V12h6a6 6 0 0 1 0 12Z"></path><path fill="#ff7262" d="M12 18a6 6 0 0 1-6-6h6v6Z"></path><path fill="#a259ff" d="M6 12a6 6 0 0 1 6-6v6H6Z"></path><path fill="#1abcfe" d="M12 6a6 6 0 0 1 6 6h-6V6Z"></path><path fill="#0acf83" d="M12 12a6 6 0 1 1-6-6 6 6 0 0 1 6 6Z"></path></svg> );
const DiJavascript1 = ({ size=40, className="" }) => ( <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}><path fill="#f0db4f" d="M0 0h32v32H0z"></path><path d="M24.2 25.42c.38-.64.38-1.4.24-2.18-.12-.74-.4-1.36-.82-1.84a2.9 2.9 0 0 0-2.22-.88c-.92 0-1.74.28-2.46.84-.7.58-1.14 1.4-1.32 2.44-.14.9.02 1.8.46 2.62.46.84 1.18 1.42 2.14 1.72s1.98.26 2.92-.12a3.3 3.3 0 0 0 1.84-1.92l.06-.06.1-.16zm-5.74.52c-.22-.44-.28-.9-.2-1.42a1.69 1.69 0 0 1 .58-1.1c.32-.26.7-.4 1.12-.4.46 0 .88.16 1.24.48.36.3.6.7.7 1.18.1.48.04 1-.14 1.46-.2.46-.54.82-1 .98-.48.18-1 .12-1.42-.1a2.04 2.04 0 0 1-1.2-1.32l-.02-.06zM12.82 25.4c.4-.62.4-1.38.26-2.16-.14-.76-.42-1.4-.84-1.86a2.9 2.9 0 0 0-2.24-.88c-.92 0-1.74.28-2.46.84-.7.58-1.14 1.4-1.32 2.44-.14.9.02 1.8.46 2.62.46.84 1.18 1.42 2.14 1.72s1.98.26 2.92-.12a3.3 3.3 0 0 0 1.84-1.92l.08-.22zm-5.74.52c-.22-.44-.28-.9-.2-1.42.08-.5.34-.92.72-1.22.38-.28.82-.42 1.3-.42.42 0 .8.14 1.12.42s.54.68.64 1.16c.1.48.04 1-.16 1.48-.2.48-.54.84-1.02 1-.48.16-1 .1-1.42-.12a2.04 2.04 0 0 1-1.22-1.3l-.04-.1zM11.62 13.3v-1.94h3.7v1.9l-2.24 2.82c-.34.42-.6.8-.78 1.1-.18.32-.28.6-.3.88h-.16c-.08-.34-.2-.68-.38-1a4.3 4.3 0 0 1-.72-1.3l-2.2-2.5v-1.9h3.7v1.9l1.1 1.42zM17.16 17.58h2.8l1.4-1.74V9.4h-1.98v5.82l-1.42 1.74h-2.16v-7.56h-1.98v9.9h1.98z"></path></svg> );
const DiNodejsSmall = ({ size=40, className="" }) => ( <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" className={className}><path fill="#68a063" d="M228.32 104.96L135.52.48a12.16 12.16 0 0 0-15.04 0L27.68 104.96a12.16 12.16 0 0 0-2.88 12.64l42.24 125.76a12.16 12.16 0 0 0 11.52 8.16h86.88a12.16 12.16 0 0 0 11.52-8.16l42.24-125.76a12.16 12.16 0 0 0-2.88-12.64zM128 234.24l-37.44-112h28.16v89.28h18.56V122.24h28.16L128 234.24z"></path></svg> );
const DiHtml5 = ({ size=40, className="" }) => ( <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128" className={className}><path fill="#e44d26" d="M20.9 11l8.2 92L64 117l34.9-14L107.1 11H20.9z"></path><path fill="#f16529" d="M64 20.3v87.4l28.6-11.4 7-78-35.6-8z"></path><path fill="#ebebeb" d="M64 43.4H39.2l1.7 19.3H64v-19.3zm0 43.1v-19.4H42.6l-1.7-19.3h23.1V31.5H29l3.5 39.3h31.5v15.7zm0 0v19.4L44.3 95l-1-11.3H31.9l-1.7 19.3h.1l33.7 12.4V95l.1-18.5z"></path><path fill="#fff" d="M63.9 43.4v19.3h23.1l-1.7 19.3H63.9v19.4l19.7-7.4.1-1.3 1.6-18.4h11.2l-3.5 39.3-33.8 12.4v-15.7h29.9l-1.6-15.6H63.9V31.5h35.6l-1.7 11.9z"></path></svg> );
const SiTypescript = ({ size=40, className="" }) => ( <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}><path fill="#007acc" d="M0 0h32v32H0z"></path><path fill="#fff" d="M4.2 13.86h5.26V25H12V13.86h5.26v-2.5H4.2v2.5zM20.7 22.5c.9 0 1.72-.2 2.44-.58s1.3-.9 1.72-1.54c.42-.66.64-1.42.64-2.3 0-.96-.23-1.8-.7-2.5-.45-.7-1.06-1.25-1.8-1.62-.76-.38-1.6-.57-2.5-.57a5.1 5.1 0 0 0-2.6.64c-.72.42-1.3.98-1.72 1.66s-.65 1.48-.65 2.4c0 .94.22 1.76.65 2.44.43.68 1 1.24 1.72 1.66s1.54.64 2.6.64zm0-2.2c-.52 0-1-.15-1.42-.44a2.2 2.2 0 0 1-.9-1.22c-.17-.5-.26-1.05-.26-1.64s.1-1.13.28-1.6c.18-.48.46-.86.84-1.16.38-.28.8-.42 1.26-.42.5 0 .94.14 1.3.42s.64.68.82 1.2c.18.5.27 1.07.27 1.7s-.1 1.2-.28 1.72c-.18.5-.46.9-.84 1.2-.38.3-.82.44-1.3.44z"></path></svg> );
const DiCss3 = ({ size=40, className="" }) => ( <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128" className={className}><path fill="#264de4" d="M20.9 11l8.2 92L64 117l34.9-14L107.1 11H20.9z"></path><path fill="#2965f1" d="M64 20.3v87.4l28.6-11.4 7-78-35.6-8z"></path><path fill="#ebebeb" d="M64 43.4H39.2l1.7 19.3H64v-19.3zm0 43.1v-19.4H42.6l-1.7-19.3h23.1V31.5H29l3.5 39.3h31.5v15.7zm0 0v19.4L44.3 95l-1-11.3H31.9l-1.7 19.3h.1l33.7 12.4V95l.1-18.5z"></path><path fill="#fff" d="M63.9 43.4v19.3h23.1l-1.7 19.3H63.9v19.4l19.7-7.4.1-1.3 1.6-18.4h11.2l-3.5 39.3-33.8 12.4v-15.7h29.9l-1.6-15.6H63.9V31.5h35.6l-1.7 11.9z"></path></svg> );

// --- End of Icon Components ---


// Custom placeholder images for a more realistic feel
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  about: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-[#111111] text-gray-200 font-sans flex min-h-screen">
      <LeftSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-4 sm:p-8 md:p-12 lg:ml-24 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
          <HeroSection id="home" setActiveSection={setActiveSection} />
          <SkillsSection id="skills" setActiveSection={setActiveSection} />
          <ProjectsSection id="projects" setActiveSection={setActiveSection} />
          <AboutSection id="about" setActiveSection={setActiveSection} />
          <ContactSection id="contact" setActiveSection={setActiveSection} />
        </div>
      </main>
    </div>
  );
}

// Reusable Section Component for Animation
const Section = ({ id, setActiveSection, children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
            setActiveSection(id);
        } else {
             // Optional: hide when out of view
             // controls.start('hidden');
        }
    }, [controls, inView, id, setActiveSection]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <motion.section
            id={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            className="w-full"
        >
            {children}
        </motion.section>
    );
};


// Left Sidebar Navigation
const LeftSidebar = ({ activeSection, setActiveSection }) => {
    const homeIcon = { id: 'home', icon: <LogoGridIcon size={22} />, label: 'Home' };

    const navItems = [
        { id: 'mail', icon: <FiMail size={22} />, label: 'Contact', sectionId: 'contact' },
        { id: 'edit', icon: <FiEdit2 size={22} />, label: 'Skills', sectionId: 'skills' },
        { id: 'bookmark', icon: <FiBookmark size={22} />, label: 'Projects', sectionId: 'projects' },
    ];

    const bottomItems = [
        { id: 'twitter', icon: <FiTwitter size={22} />, href: 'https://twitter.com', external: true, label: 'Twitter' },
        { id: 'about', icon: <FiUser size={22} />, href: '#about', external: false, label: 'About', sectionId: 'about' },
    ];

    return (
        <nav className="hidden lg:flex flex-col items-center justify-between w-24 h-screen bg-[#191919] fixed left-0 top-0 z-50 py-10">
            <a
                href="#home"
                onClick={() => setActiveSection(homeIcon.id)}
                aria-label={homeIcon.label}
                className={p-3 rounded-full transition-all duration-300 ${
                    activeSection === homeIcon.id
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                        : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }}
            >
                {homeIcon.icon}
            </a>

            <div className="flex flex-col items-center space-y-8">
                {navItems.map(item => (
                    <a
                        key={item.id}
                        href={#${item.sectionId}}
                        onClick={() => setActiveSection(item.sectionId)}
                        aria-label={item.label}
                        className={p-3 rounded-full transition-all duration-300 ${
                            activeSection === item.sectionId
                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                        }}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            <div className="flex flex-col items-center space-y-6">
                {bottomItems.map(item => {
                    if (item.external) {
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                {item.icon}
                            </a>
                        );
                    }
                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveSection(item.sectionId)}
                            aria-label={item.label}
                            className={p-3 rounded-full transition-all duration-300 ${
                                activeSection === item.sectionId
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                    : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                            }}
                        >
                            {item.icon}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

// Hero Section
const HeroSection = ({ id, setActiveSection }) => {
  return (
    <Section id={id} setActiveSection={setActiveSection}>
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
            <motion.div 
                className="md:w-3/5 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-emerald-400">Available for hire</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Hi, I'm John Doe
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mt-4">
                    Full-Stack Developer - UI/UX Designer
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <motion.a href="#resume" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-transparent border-2 border-emerald-500 text-emerald-500 font-semibold rounded-lg shadow-lg hover:bg-emerald-500 hover:text-white transition-all duration-300">
                        Download Resume
                    </motion.a>
                    <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300">
                        Let's Talk
                    </motion.a>
                </div>
            </motion.div>
            <motion.div 
                className="relative mt-12 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden shadow-2xl">
                    <img src={IMAGES.hero} alt="John Doe" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </motion.div>
        </div>
    </Section>
  );
};


// Skills Section
const SkillsSection = ({ id, setActiveSection }) => {
    const skills = [
        { name: 'React', icon: <DiReact size={40} /> },
        { name: 'Figma', icon: <SiFigma size={40} /> },
        { name: 'JavaScript', icon: <DiJavascript1 size={40} /> },
        { name: 'Node.js', icon: <DiNodejsSmall size={40} /> },
        { name: 'HTML5', icon: <DiHtml5 size={40} /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} /> },
        { name: 'CSS3', icon: <DiCss3 size={40} /> },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            },
        }),
    };

    return (
        <Section id={id} setActiveSection={setActiveSection}>
            <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        custom={i}
                        variants={cardVariants}
                        className="bg-[#191919] rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                    >
                        {skill.icon}
                        <p className="font-semibold text-lg">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

// Projects Section
const ProjectsSection = ({ id, setActiveSection }) => {
  const projects = [
    {
      title: 'Proata Camer',
      tags: ['React', 'TypeScript'],
      description: 'Expertise in a largaf ax, the worldnotes.',
      live: '#',
      github: '#',
    },
    {
      title: 'First-Ogooring',
      tags: ['Nexus', 'Types'],
      description: 'Develop and implement integration in clients we.',
      live: '#',
      github: '#',
    },
    {
      title: 'Test-Oaatara',
      tags: ['Nexus'],
      description: 'A stanariat integnal neri-ejs, dulic analyar, and',
      live: '#',
      github: '#',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut"
        },
    }),
  };

  return (
    <Section id={id} setActiveSection={setActiveSection}>
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            className="bg-[#191919] rounded-xl p-6 flex flex-col justify-between border border-gray-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-gray-700 text-emerald-400 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-end gap-4">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors">
                <FiExternalLink /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors">
                <FiGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};


// About Section
const AboutSection = ({ id, setActiveSection }) => {
    return (
        <Section id={id} setActiveSection={setActiveSection}>
            <div className="bg-[#191919] rounded-xl p-8 md:p-12 border border-gray-800">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <motion.div 
                        className="w-48 h-48 md:w-60 md:h-60 rounded-xl overflow-hidden flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src={IMAGES.about} alt="About John Doe" className="w-full h-full object-cover"/>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-400 mb-6">
                            A nesentits kassit nuls nect, development, and UI/UX. I am a passionate developer with a knack for creating elegant solutions in the least amount of time. I love to learn new technologies and frameworks.
                        </p>
                        <motion.a href="#resume" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-6 py-3 bg-transparent border-2 border-emerald-500 text-emerald-500 font-semibold rounded-lg shadow-lg hover:bg-emerald-500 hover:text-white transition-all duration-300">
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

// Contact Section
const ContactSection = ({ id, setActiveSection }) => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setStatus('Message sent successfully!');
            setTimeout(() => setStatus(''), 3000);
            e.target.reset();
        }, 2000);
    };

    return (
        <Section id={id} setActiveSection={setActiveSection}>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Contact</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Have a project in mind or just want to say hi? Feel free to send me a message.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <input type="text" name="name" placeholder="Name" required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-500 text-white p-3 outline-none transition-colors duration-300" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <input type="email" name="email" placeholder="Email" required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-500 text-white p-3 outline-none transition-colors duration-300" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <textarea name="message" placeholder="Message" rows="4" required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-500 text-white p-3 outline-none transition-colors duration-300 resize-none"></textarea>
                </motion.div>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-all duration-300 w-full md:w-auto">
                        Send Message
                    </motion.button>
                </motion.div>
                {status && <p className="text-center mt-4 text-emerald-400">{status}</p>}
            </form>
        </Section>
    );
};



