import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col pt-0 transition-colors duration-500">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="currentColor"
      />
      
      <div className="flex-1 flex flex-col lg:flex-row h-full w-full z-10">
        {/* Left content */}
        <div className="flex-1 px-6 sm:px-12 lg:pl-12 lg:pr-0 relative z-10 flex flex-col justify-center py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 leading-none font-playfair tracking-tighter">
              <span className="block mb-2">AUTOMATE.</span>
              <span className="block mb-2">ACCELERATE.</span>
              <span className="block text-foreground">10X.</span>
            </h1>
            
            <p className="mt-8 text-muted-foreground text-lg md:text-xl font-montserrat leading-relaxed">
              Eliminate manual work, cut costs, and deliver 10x efficiency with custom AI and autonomous agents built for scale.
            </p>

            {/* CTA Buttons - Refined */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <Button
                onClick={() => navigate("/book-call")}
                className="rounded-full bg-primary text-primary-foreground px-8 py-6 text-lg font-bold transition-all hover:opacity-90 hover:scale-105 shadow-xl shadow-primary/10"
              >
                Book Demo
              </Button>
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="rounded-full border-2 flex items-center gap-3 border-border bg-accent/50 px-8 py-6 text-lg font-bold text-foreground transition-all hover:bg-accent hover:border-foreground/20 group"
              >
                Explore <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative hidden lg:flex items-center pt-24 h-screen bg-transparent">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* Scroll indicator overlay */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <p className="text-xs font-light">Scroll</p>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
