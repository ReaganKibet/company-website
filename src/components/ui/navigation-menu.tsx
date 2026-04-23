import * as React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  collapsed: {
    y: -10,
    opacity: 0.9,
    width: "auto",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
};

const itemVariants = {
  expanded: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export function AnimatedNavFramer() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={isVisible ? { y: 0, x: "-50%", opacity: 1 } : { y: -100, x: "-50%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-6 left-1/2 z-50 hidden md:block"
    >
      <nav
        className={cn(
          "flex items-center justify-center h-12 px-6 rounded-full transition-all duration-500",
          "bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        )}
      >
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className="text-xs lg:text-sm font-medium text-white/70 hover:text-white transition-colors font-montserrat whitespace-nowrap"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
