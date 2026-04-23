import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-card text-foreground border-t border-border transition-colors duration-500">
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-primary/10 blur-[180px]" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20"
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/tatua-hero.png"
              alt="TATUA Logo"
              className="h-20 transition-transform duration-500 group-hover:scale-105 invert dark:invert-0"
            />
          </Link>

          <p className="max-w-lg text-center lg:text-right text-muted-foreground leading-relaxed">
            Empowering innovators with AI-driven solutions and community insights.
            Transform your business with intelligence and connection.
          </p>
        </motion.div>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest text-foreground/80 mb-6 uppercase">
              Explore
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/solutions">Solutions</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/book-call">Book a Call</FooterLink>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest text-foreground/80 mb-6 uppercase">
              Connect
            </h3>
            <div className="flex gap-5 mb-8">
              <SocialLink
                href="mailto:hallo@tatua.site"
                icon={<Mail size={20} />}
                label="Email"
              />
              <SocialLink
                href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
                icon={<FaWhatsapp size={20} />}
                label="WhatsApp"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Join our community to stay inspired and informed.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest text-foreground/80 mb-6 uppercase">
              Newsletter
            </h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on AI updates and insights.
            </p>
            <div className="flex items-center bg-accent/50 backdrop-blur-md rounded-xl overflow-hidden border border-border">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground hover:opacity-90 px-4 py-3 transition-all duration-300 flex items-center justify-center">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© {currentYear} TATUA. All rights reserved.</p>
          <div className="flex gap-8">
            <FooterLink to="/policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-and-conditions">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ to, children, className = "" }: FooterLinkProps) => (
  <li>
    <a
      href={to}
      className={`text-gray-400 hover:text-white transition-all duration-300 hover:tracking-widest ${className}`}
    >
      {children}
    </a>
  </li>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

export default Footer;
