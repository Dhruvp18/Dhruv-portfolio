import React, { useEffect } from "react";
import { Share2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "../components/SocialLinks";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
      {/* Header Section */}
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Connect With Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Let’s stay connected! Follow me or reach out through any of the
          platforms below.
        </p>
      </div>

      {/* Full-Width Connect Section */}
      <div
        className="h-auto py-14 flex items-center justify-center md:px-0"
        id="Contact"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-16 transform transition-all duration-500 hover:shadow-[#6366f1]/10"
        >
          {/* Header row inside the container */}
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Let’s Connect
            </h3>
            <Share2 className="w-12 h-12 text-[#6366f1] opacity-80" />
          </div>

          {/* Text and social links */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-4xl">
            You can find me on these platforms — I’d love to collaborate or chat
            about exciting opportunities!
          </p>

          <div className="pt-6 flex justify-center space-x-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
