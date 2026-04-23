import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 size-full">
        <div className="grid w-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-4 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-1 h-screen" />
        </div>
      </div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6 text-center text-white">
        {/* Top badge */}
        <div className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <p className="text-sm font-medium text-white/90">
            Built for Kenya's Operations Leaders
          </p>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-center text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          <span className="block">AUTOMATE.</span>
          <span className="block">ACCELERATE.</span>
          <span className="block text-yellow-400">10X.</span>
        </h1>

        {/* Secondary headline */}
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
          RECLAIM TIME. MULTIPLY REVENUE.
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg font-light text-white/90 md:text-xl">
          Your team wastes hours on repetitive tasks that smart automation can
          complete in seconds. Tatua builds custom AI and intelligent workflows
          that eliminate manual work, cut costs, and deliver 10x efficiency —
          all seamlessly integrated into the tools you already use.
        </p>

        {/* Value proposition box */}
        <div className="mx-auto mb-10 max-w-2xl rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-lg font-light text-white/95">
            Stop losing time and money on manual processes.
          </p>
          <p className="mt-3 text-lg font-light text-yellow-200">
            Tatua gives you back hours every day, reduces operational costs, and
            drives measurable revenue growth through intelligent automation —
            from M-Pesa reconciliation to AI sales reactivation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          {/* Primary Button */}
          <Button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent">
            <span className="rounded-full bg-yellow-400 px-8 py-3 text-lg font-semibold text-black transition-all duration-500 ease-in-out group-hover:bg-black group-hover:text-yellow-400">
              Book a Free Consultation
            </span>
          </Button>

          {/* Secondary Button with icon */}
          <Button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent">
            <span className="rounded-full border border-white/30 px-8 py-3 text-lg font-semibold text-white transition-all duration-500 ease-in-out group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
              See How It Works
            </span>
            <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-white/10 p-5 text-white transition-all duration-500 ease-in-out group-hover:bg-yellow-400 group-hover:text-black">
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
            </div>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <p className="text-sm font-light">Scroll to explore</p>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
