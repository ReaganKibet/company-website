import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Main Header Container */}
      <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        <div className="max-w-[1600px] mx-auto px-6 py-6 flex justify-between items-center w-full">
          {/* Logo — fixed top-left */}
          <div className="pointer-events-auto">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-all duration-300">
                <span className="text-primary-foreground font-bold text-xl font-playfair">T</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground font-playfair group-hover:opacity-80 transition-colors">
                  tatua
                </span>
                <span className="text-[10px] text-muted-foreground font-montserrat tracking-[0.2em] leading-none uppercase">Operations AI</span>
              </div>
            </Link>
          </div>

          {/* Action Area — fixed top-right (desktop) */}
          <div className="hidden md:flex items-center gap-4 pointer-events-auto">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground transition-all duration-300 shadow-sm border border-border"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/book-call"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-md font-montserrat"
            >
              <Phone size={14} className="fill-current" />
              Book Demo
            </Link>
          </div>

          {/* Mobile buttons — fixed top-right (mobile only) */}
          <div className="md:hidden flex items-center gap-3 pointer-events-auto">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground p-3 rounded-xl border border-border bg-accent/50 backdrop-blur-md hover:bg-accent transition-all shadow-lg"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-3 rounded-xl border border-border bg-accent/50 backdrop-blur-md hover:bg-accent transition-all shadow-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Animated pill nav — centered */}
      <AnimatedNavFramer />

      {/* Mobile slide-down menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border py-8 shadow-2xl">
          <div className="max-w-7xl mx-auto px-8 flex flex-col space-y-4">
            {[
              { label: "Services", href: "/services" },
              { label: "Solutions", href: "/solutions" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Resources", href: "/resources" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-3 text-foreground/80 hover:text-foreground transition-all font-montserrat text-lg font-medium rounded-xl hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-border">
              <Link
                to="/book-call"
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-bold justify-center font-montserrat w-full shadow-lg"
              >
                <Phone size={16} />
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
