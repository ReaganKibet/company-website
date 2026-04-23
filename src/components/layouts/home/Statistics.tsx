import { BrainCircuitIcon, GaugeIcon, LineChartIcon, TimerIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface StatisticsProps {
  onSectionChange?: (sectionId: string) => void;
}

const Statistics: React.FC<StatisticsProps> = ({ onSectionChange }) => {
  const stats = [
    {
      value: "40%",
      label: "Time Saved on Repetitive Tasks",
      icon: <TimerIcon className="text-green-400" size={24} />,
      gradient: "from-green-400 to-emerald-600",
    },
    {
      value: "100%",
      label: "Seamless Automation Integration",
      icon: <BrainCircuitIcon className="text-blue-400" size={24} />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      value: "Exec",
      label: "Executive-Grade AI Solutions",
      icon: <GaugeIcon className="text-amber-400" size={24} />,
      gradient: "from-amber-400 to-orange-600",
    },
    {
      value: "X2",
      label: "Accelerated Business Growth",
      icon: <LineChartIcon className="text-purple-400" size={24} />,
      gradient: "from-purple-400 to-fuchsia-600",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!onSectionChange) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onSectionChange("statistics");
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, [onSectionChange]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background transition-colors duration-500"
    >
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
          Impact & Value
        </h2>
        <p className="text-lg text-muted-foreground mb-16 font-light">
          Measurable results that redefine how African enterprises operate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-card border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {/* Glossy gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 from-foreground to-transparent pointer-events-none" />

              <div className="flex flex-col items-center justify-center p-10 min-h-[220px]">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-accent">
                  {stat.icon}
                </div>

                <div className="flex items-center mb-3">
                  <span className="text-5xl md:text-6xl font-bold text-foreground mr-2">
                    {stat.value}
                  </span>
                </div>

                <div
                  className={`bg-primary text-primary-foreground mt-4 text-sm md:text-base tracking-wide text-center font-medium rounded-full px-4 py-1 inline-block shadow-lg`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
