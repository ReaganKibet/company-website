import { useState, useEffect } from 'react';
import CommunitySpotlight from '@/components/layouts/about/CommunitySpotlight';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Globe, Award, ChevronRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <main className="min-h-screen bg-background text-muted-foreground flex flex-col items-center overflow-x-hidden transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden mb-2 bg-background border-b border-border">
        <div className="relative z-10 text-center px-4 py-8 md:py-0 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-accent border border-border text-foreground rounded-full text-sm font-medium">
              About Tatua
            </span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            We help African businesses automate, scale, and save time through tailored AI solutions that make a measurable impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all shadow-lg"
            >
              Explore Our Work <ChevronRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-2xl bg-background border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >
              Book a Call <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full max-w-6xl mb-16 md:mb-24 py-12 md:py-16 bg-background mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-foreground">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small idea to Africa’s growing leader in applied AI automation and innovation.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border rounded-full"></div>
          
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {/* Step 1 */}
            <JourneyStep 
              icon={<Users className="w-5 h-5 text-primary" />}
              title="Where It Began"
              text="Tatua started with a single belief — that small African businesses deserve access to powerful, intelligent automation that saves time and drives growth. What began as a few simple projects has become a growing movement of AI-driven transformation."
              year="2022"
              direction="left"
            />
            
            {/* Step 2 */}
            <JourneyStep 
              icon={<Globe className="w-5 h-5 text-primary" />}
              title="Expanding Our Impact"
              text="From helping small enterprises automate daily tasks to working with startups and social enterprises, Tatua’s work has touched industries from logistics to fashion — transforming how businesses operate and grow through automation."
              year="2023"
              direction="right"
            />
            
            {/* Step 3 */}
            <JourneyStep 
              icon={<Award className="w-5 h-5 text-primary" />}
              title="The Future"
              text="We are scaling our reach across Africa — building intelligent systems, nurturing local talent, and helping organizations unlock efficiency through customized AI tools built for their unique challenges."
              year="Present"
              direction="left"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full max-w-6xl mb-16 md:mb-24 py-12 md:py-16 bg-card border border-border mx-auto px-4 sm:px-8 rounded-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To make AI accessible, practical, and valuable for African businesses through intelligent automation and hands-on collaboration.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <MissionCard 
            icon={<Users className="w-6 h-6 text-primary" />} 
            title="Empower Businesses"
            text="We help businesses reclaim time by automating manual, repetitive processes — allowing teams to focus on creativity, strategy, and customer relationships."
          />
          <MissionCard 
            icon={<Lightbulb className="w-6 h-6 text-primary" />} 
            title="Innovate Locally"
            text="Our automations are built for local challenges — from payment systems to customer engagement — showing that world-class innovation can be made in Africa, for Africa."
          />
          <MissionCard 
            icon={<Globe className="w-6 h-6 text-primary" />} 
            title="Build Inclusively"
            text="We work with diverse partners to ensure everyone — from small business owners to large organizations — can leverage AI for growth and opportunity."
          />
          <MissionCard 
            icon={<Award className="w-6 h-6 text-primary" />} 
            title="Deliver Impact"
            text="Our work is measured not by technology alone, but by the lives and businesses transformed through efficiency, insight, and better decision-making."
          />
        </div>
      </section>

      {/* Vision */}
      <section className="w-full max-w-6xl mb-16 md:mb-24 py-12 md:py-16 bg-background mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-foreground">Our Vision</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An Africa where intelligent automation drives growth, inclusion, and creativity.
          </p>
        </motion.div>
      </section>

      {/* Community Spotlight */}
      <section className="w-full max-w-6xl mb-16 md:mb-24 py-12 md:py-16 bg-card border border-border mx-auto px-4 sm:px-8 rounded-2xl shadow-sm">
        <CommunitySpotlight />
      </section>
    </main>
  );
};

const MissionCard = ({ icon, title, text }: { icon: JSX.Element; title: string; text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-accent/30 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 border border-border"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-2 text-xl font-normal text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">{text}</p>
  </motion.div>
);

const JourneyStep = ({
  icon, title, text, year, direction
}: {
  icon: JSX.Element; title: string; text: string; year: string; direction: 'left' | 'right';
}) => (
  <motion.div 
    initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`flex flex-col md:flex-row items-center ${direction === 'right' ? 'md:flex-row-reverse' : ''}`}
  >
    <div className={`md:w-1/2 ${direction === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0`}>
      <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border bg-card">
        <h3 className="text-xl font-normal mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
        <div className={`mt-4 flex items-center ${direction === 'left' ? 'md:justify-end' : ''}`}>
          <span className="text-sm font-bold text-foreground/80">{year}</span>
        </div>
      </div>
    </div>
    <div className="relative flex items-center justify-center z-10 rounded-full w-12 h-12 shadow-sm border border-border bg-card">
      {icon}
    </div>
  </motion.div>
);

export default About;
