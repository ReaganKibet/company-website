import { BrainCircuitIcon, LineChartIcon, TimerIcon, GaugeIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface PartnersAndStatsProps {
  onSectionChange?: (sectionId: string) => void;
}

const PartnersAndStats: React.FC<PartnersAndStatsProps> = ({ onSectionChange }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const stats = [
    {
      value: "40%",
      label: "Time Saved on Routine Tasks",
      description:
        "Teams automating with Tatua eliminate 40% of their weekly admin load — data entry, reminders, reconciliation, reports.",
      icon: <TimerIcon className="text-gray-700 hover:text-black transition-colors" strokeWidth={1.5} size={34} />,
      gradient: "from-gray-700 to-gray-900",
    },
    {
      value: "<2 wks",
      label: "Average Time to First Automation Live",
      description:
        "From first call to a running automation in under two weeks — integrated with M-Pesa, WhatsApp, or your existing tools.",
      icon: <BrainCircuitIcon className="text-gray-700 hover:text-black transition-colors" strokeWidth={1.5} size={34} />,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      value: "3 hrs",
      label: "Average Daily Time Reclaimed",
      description:
        "Tatua automations give operations teams back an average of 3 hours per day — time redirected to growth, client work, and decision-making.",
      icon: <GaugeIcon className="text-gray-700 hover:text-black transition-colors" strokeWidth={1.5} size={34} />,
      gradient: "from-gray-500 to-gray-700",
    },
    {
      value: "X2",
      label: "Accelerated Business Growth",
      description:
        "Clients processing the same workload with half the manual effort — or doubling output without new hires.",
      icon: <LineChartIcon className="text-gray-700 hover:text-black transition-colors" strokeWidth={1.5} size={34} />,
      gradient: "from-gray-700 to-black",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (onSectionChange) onSectionChange("partnersAndStats");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [onSectionChange]);

  return (
    <section ref={sectionRef} className="py-20 bg-background font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 bg-card border border-border p-8 rounded-[2rem] shadow-sm">
        {/* Impact Section */}
        <div className="mb-8 p-12">
          <h5 className="text-center text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight font-playfair">
            <span className="">Impact & Value</span>
          </h5>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg font-montserrat">
            Tatua empowers African enterprises with intelligent automation, measurable efficiency,
            and strategic business impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/20"
              >
                {/* Glossy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 from-foreground to-transparent pointer-events-none" />

                <div className="flex flex-col h-full p-6">
                  {/* Header with icon and value */}
                  <div className="flex items-center mb-4">
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                    <span className="ml-2 text-3xl md:text-4xl font-bold text-foreground font-playfair">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <div
                    className="bg-primary text-primary-foreground text-[10px] md:text-xs tracking-widest text-center font-bold uppercase rounded-full px-4 py-2 inline-block shadow-sm mb-4 self-start font-montserrat"
                  >
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-base mt-2 flex-grow font-montserrat leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndStats;
