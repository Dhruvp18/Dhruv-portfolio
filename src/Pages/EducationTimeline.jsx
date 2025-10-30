import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "B.Tech in Computer Engineering",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    duration: "2023 – 2027 (Expected)",
    description:
      "Focused on computer systems, web development, and artificial intelligence. Involved in multiple technical projects and hackathons.",
    score: "7.98 CGPA",
  },
  {
    title: "Higher Secondary Education (HSC)",
    institution: "Prakash College of Science & Commerce, Mumbai",
    duration: "2021 – 2023",
    description:
      "Completed HSC with specialization in Science and Mathematics, securing distinction grades.",
    score: "78.5%",
  },
  {
    title: "Indian Certificate of Secondary Education (ICSE)",
    institution: "St. Francis High School, Mumbai",
    duration: "2021",
    description:
      "Completed SSC with a strong academic foundation in core subjects and extracurricular achievements.",
    score: "96.33%",
  },
];

const EducationTimeline = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div
      className="w-full bg-white/5 backdrop-blur-xl rounded-3xl p-10 sm:p-14 shadow-2xl
                 transition-all duration-500 hover:shadow-[#6366f1]/10"
      data-aos="fade-up"
    >
      {/* Section Header */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <GraduationCap className="w-8 h-8 text-[#6366f1]" />
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Education
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-[#6366f1]/30 ml-4 pl-6 space-y-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[1.1rem] top-2 w-4 h-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full shadow-lg shadow-[#6366f1]/30 animate-pulse" />

            {/* Content Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#6366f1]/30 transition-all duration-300">
              {/* Institution + Score */}
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {edu.institution}
                </h3>

                {/* Translucent Score Badge */}
                <div
                  className="text-xs md:text-sm font-semibold text-gray-200 px-3 py-1 rounded-lg
                             bg-white/10 backdrop-blur-md border border-white/10
                             shadow-sm transition-all duration-500
                             hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7]
                             hover:text-white hover:shadow-[#a855f7]/40 hover:scale-105"
                >
                  {edu.score}
                </div>
              </div>

              <p className="text-sm text-gray-400">{edu.title}</p>

              <p className="text-xs text-[#a855f7] font-medium mt-1">
                {edu.duration}
              </p>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
