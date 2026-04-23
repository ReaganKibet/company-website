import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAIText } from '../../../hooks/useAIText';

interface CallToActionProps {
  onSectionChange?: (section: string) => void;
}

const CallToAction = ({ onSectionChange }: CallToActionProps) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { text, loading } = useAIText();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 mt-0 mb-0 min-h-[80vh] overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(128,128,128,0.1)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-semibold mb-6 text-foreground transition-all duration-700 transform ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Ready to Transform <br /> Your Operations?
          </h2>

          <p
            className={`text-xl text-muted-foreground mb-10 transition-all duration-700 transform ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {text}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 transform ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-base px-10 py-4 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book a Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <Link
              to="/case-studies"
              className="group text-base px-10 py-4 rounded-full font-semibold border border-border text-foreground bg-accent/50 hover:bg-accent transition-all duration-300 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              See Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
