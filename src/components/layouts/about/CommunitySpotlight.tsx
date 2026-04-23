import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from "lucide-react";

interface CommunitySpotlightProps {
  onSectionChange?: (section: string) => void;
}

const CommunitySpotlight = ({ onSectionChange }: CommunitySpotlightProps) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const members = [
    {
      name: "Allan Erissat",
      role: "",
      imgSrc: "/images/allan-erissat.png",
      linkedIn: "https://www.linkedin.com/in/aerissat/?originalSubdomain=ke",
    },
    {
      name: "Reagan Langat",
      role: "",
      imgSrc: "/images/reagan-langat.png",
      linkedIn: "https://www.linkedin.com/in/reagan-langat/",
    },
    {
      name: "Tevin Kamau",
      role: "",
      imgSrc: "/images/tevin-kamau.jpg",
      linkedIn: "https://www.linkedin.com/in/tevinkamau/",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-semibold text-white mb-4">
            Community Spotlight
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals driving innovation in Tatua
          </p>
        </motion.div>

        {/* All Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-xl p-6 w-64 transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20 shadow-sm">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>

              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={20} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
