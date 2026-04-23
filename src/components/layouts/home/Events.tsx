import { ArrowRight, Cpu, Bot, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Skeleton } from "../Skeleton";

const fallbackService = {
  id: "featured-service",
  title: "Custom AI Solutions for African Businesses",
  description:
    "We design and deploy tailored AI automations for enterprises — from client communication to financial tracking and smart decision support systems.",
  category: "AI Consulting",
  imageUrl:
    "https://media.licdn.com/dms/image/v2/D5612AQEjOjW_A8zjLQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686076448747?e=1763596800&v=beta&t=PnaadSk1A-4TXIMwU1E8dGT6n9fDCSUred0Bh2nxNes",
};

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col py-16 px-6 md:px-20 bg-background transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-start mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground rounded-2xl p-4 tracking-wide inline-block font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>

          <motion.p
            className="text-lg font-light text-muted-foreground mx-auto font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore how Tatua helps businesses unlock efficiency through
            practical, scalable, and locally relevant AI automation.
          </motion.p>
        </div>

        {/* Featured Service Card */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-3 h-64 lg:h-[400px] overflow-hidden rounded-2xl">
              <Skeleton height="100%" width="100%" />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between p-6 space-y-4">
              <Skeleton variant="text" width="30%" className="mb-4" />
              <Skeleton variant="text" width="80%" height="32px" className="mb-3" />
              <Skeleton variant="text" width="100%" height="80px" className="mb-6" />
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8 bg-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Service Image */}
            <div className="lg:col-span-3 h-64 lg:h-auto overflow-hidden rounded-2xl shadow-md bg-accent">
              <img
                src={fallbackService.imageUrl}
                alt={fallbackService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  // Fallback to generated image if LinkedIn fails
                  e.currentTarget.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600";
                }}
              />
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2 flex flex-col justify-between p-6 bg-card rounded-2xl shadow-sm border border-border">
              <div>
                <div className="inline-block bg-accent text-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {fallbackService.category}
                </div>

                <h3 className="text-2xl md:text-3xl mb-3 text-foreground font-bold font-playfair">
                  {fallbackService.title}
                </h3>

                <p className="text-muted-foreground mb-6 font-montserrat">
                  {fallbackService.description}
                </p>

                <div className="grid grid-cols-1 gap-3 mb-6 text-foreground/80">
                  <div className="flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-muted-foreground" />
                    <span>Automated Client Communication</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-muted-foreground" />
                    <span>Smart Bookkeeping & Payment Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-muted-foreground" />
                    <span>Custom AI Integrations & Advisory</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-4 border-t border-border">
                <Link
                  to="/services"
                  className="inline-flex items-center text-foreground font-medium hover:text-primary hover:underline transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <a
                    href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium py-2 px-6 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
                  >
                    Talk to Us
                  </a>

                
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center border border-border text-foreground font-semibold py-2 px-6 rounded-full text-lg bg-accent/50 hover:bg-accent transition-all duration-200 hover:scale-105 shadow-sm"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
