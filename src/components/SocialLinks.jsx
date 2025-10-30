import { useEffect } from "react";
import { Linkedin, Github, Instagram, ExternalLink, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "Let's Connect",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/dhruvpanchall/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "Mail",
    displayName: "Gmail",
    subText: "dhruvp2005@gmail.com",
    icon: Mail,
    url: "mailto:dhruvp2005@gmail.com",
    color: "#EA4335",
    gradient: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
  },

  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@Dhruvp18",
    icon: Github,
    url: "https://github.com/Dhruvp18",
    color: "#cfcfcf",
    gradient: "from-[#6e5494] via-[#24292e] to-[#0d1117]",
  },
    {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@dhruv.p18_",
    icon: Instagram,
    url: "https://www.instagram.com/dhruv.p18_/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
];

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  return (
    <div
      className="w-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl
                 transition-all duration-500 hover:shadow-[#6366f1]/10"
      data-aos="fade-up"
    >
      <h3
        className="text-xl font-semibold text-white mb-8 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      {/* 2x2 Responsive Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-6 rounded-2xl
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            {/* Hover gradient background */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r ${link.gradient}`}
            />

            {/* Icon - Left aligned */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-xl transition-all duration-500
                           group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: link.color }}
              />
              <div className="relative p-2 rounded-xl">
                <link.icon
                  className="w-8 h-8 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            {/* Text - Center aligned vertically with icon */}
            <div className="flex flex-col justify-center">
              <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {link.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {link.subText}
              </span>
            </div>

            {/* External link icon */}
            <ExternalLink
              className="absolute right-4 w-4 h-4 text-gray-500 group-hover:text-white
                         opacity-0 group-hover:opacity-100 transition-all duration-300 transform
                         group-hover:translate-x-0 translate-x-[-0.25rem]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
