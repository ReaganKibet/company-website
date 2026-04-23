import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Cpu, BarChart3, Clock, Shield, Zap as ZapIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Interactive3DShowcase() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full pt-32 pb-20 bg-background overflow-hidden transition-colors duration-500">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/20" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-4 shadow-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80 font-montserrat">
              Real Results. Real Impact.
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Automation That Delivers Measurable Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
            From day one, our clients see tangible improvements. Watch how businesses 
            transform their operations with intelligent automation.
          </p>
        </div>

        {/* Main showcase card */}
        <div className="relative bg-card backdrop-blur-xl border border-border rounded-2xl overflow-hidden p-8 mb-12 shadow-sm">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="currentColor"
          />

          <div className="relative z-20 grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-playfair">
                Your Team Works Smarter
              </h3>

              {/* Key metrics */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Clock,
                    title: "85% Less Time",
                    desc: "Manual tasks completed in minutes, not days",
                  },
                  {
                    icon: Cpu,
                    title: "10x Smarter",
                    desc: "AI handles complex decisions automatically",
                  },
                  {
                    icon: BarChart3,
                    title: "2-3x Revenue Growth",
                    desc: "From M-Pesa recovery to sales reactivation",
                  },
                ].map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors border border-border/50">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary mt-1" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          {benefit.title}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/services")}
                  className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg shadow-md"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => navigate("/book-call")}
                  className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-3 font-semibold text-foreground transition-all hover:bg-accent"
                >
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right content - Image showcase */}
            <div className="relative min-h-[400px] rounded-lg overflow-hidden bg-accent/20 border border-border shadow-inner">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05))] bg-[length:60px_60px] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] animate-pulse" />
              
              {/* Stats display */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                      10X
                    </p>
                    <p className="text-lg text-muted-foreground">Efficiency Increase</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    {[
                      { label: "Hours Saved", value: "40+" },
                      { label: "Monthly Impact", value: "Huge" },
                      { label: "Error Rate", value: "-95%" },
                      { label: "ROI", value: "300%+" },
                    ].map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid below showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Enterprise Ready",
              description: "Bank-level security and compliance built in",
            },
            {
              icon: Cpu,
              title: "AI-Powered",
              description: "Advanced machine learning at your fingertips",
            },
            {
              icon: ZapIcon,
              title: "Lightning Fast",
              description: "Deploy in days, not months or quarters",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors shadow-sm"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
