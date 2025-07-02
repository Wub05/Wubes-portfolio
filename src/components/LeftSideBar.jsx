import {
  FiMail,
  FiEdit2,
  FiBookmark,
  FiLinkedin,
  FiUser,
} from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";

const LeftSidebar = ({ activeSection, setActiveSection }) => {
  const homeIcon = {
    id: "home",
    icon: <TbGridDots size={22} />,
    label: "Home",
  };

  const navItems = [
    {
      id: "edit",
      icon: <FiEdit2 size={22} />,
      label: "Skills",
      sectionId: "skills",
    },
    {
      id: "bookmark",
      icon: <FiBookmark size={22} />,
      label: "Projects",
      sectionId: "projects",
    },
    {
      id: "mail",
      icon: <FiMail size={22} />,
      label: "Contact",
      sectionId: "contact",
    },
  ];

  const bottomItems = [
    {
      id: "about",
      icon: <FiUser size={22} />,
      href: "#about",
      external: false,
      label: "About",
      sectionId: "about",
    },
    {
      id: "linkedin",
      icon: <FiLinkedin size={22} />,
      href: "https://www.linkedin.com/in/wubishet-tassew-371a44211/", // Replace with your actual LinkedIn URL
      external: true,
      label: "LinkedIn",
    },
  ];

  const Tooltip = ({ label }) => (
    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-gray-800 text-white text-xs py-1 px-3 rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
      {label}
    </span>
  );

  const IconLink = ({ children, label, ...props }) => (
    <a
      {...props}
      className={`${props.className} relative group flex items-center justify-center`}
      aria-label={label}
    >
      {children}
      <Tooltip label={label} />
    </a>
  );

  return (
    <nav className="hidden lg:flex flex-col items-center gap-5 w-20 h-screen  bg-opacity-80 backdrop-blur-md border-r fixed left-0 top-0 z-50 py-20 border-[#101010] shadow-[8px_0_15px_-5px_rgba(0,0,0,0.2)]">
      {/* Top: Home Icon */}
      <IconLink
        href="#home"
        onClick={() => setActiveSection(homeIcon.id)}
        label={homeIcon.label}
        className={`p-3 rounded-xl transition-all duration-300 bg-white/15 ${
          activeSection === homeIcon.id
            ? "bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-500 text-white shadow-xl shadow-emerald-500/30"
            : "text-gray-400 hover:bg-gray-700/30 hover:text-white"
        }`}
      >
        {homeIcon.icon}
      </IconLink>
      {/* Middle Nav Icons */}
      <div className="flex flex-col items-center space-y-8 py-5 mt-10 bg-white/15 rounded-xl">
        {navItems.map((item) => (
          <IconLink
            key={item.id}
            href={`#${item.sectionId}`}
            onClick={() => setActiveSection(item.sectionId)}
            label={item.label}
            className={`p-3 rounded-xl transition-all duration-300 ${
              activeSection === item.sectionId
                ? "bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-500 text-white shadow-xl shadow-emerald-500/30"
                : "text-gray-400 hover:bg-gray-700/30 hover:text-white"
            }`}
          >
            {item.icon}
          </IconLink>
        ))}
      </div>
      {/* Bottom External/About */}
      <div className="flex flex-col items-center space-y-8 mt-10 bg-white/15 py-5 rounded-xl">
        {bottomItems.map((item) => {
          if (item.external) {
            return (
              <IconLink
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                label={item.label}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-700/30"
              >
                {item.icon}
              </IconLink>
            );
          }

          return (
            <IconLink
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.sectionId)}
              label={item.label}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.sectionId
                  ? "bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-500 text-white shadow-xl shadow-emerald-500/30"
                  : "text-gray-400 hover:bg-gray-700/30 hover:text-white"
              }`}
            >
              {item.icon}
            </IconLink>
          );
        })}
      </div>
    </nav>
  );
};

export default LeftSidebar;
