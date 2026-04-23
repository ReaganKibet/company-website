import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0";

const TimeSavedCalculator = () => {
  const [taskHrsWeek, setTaskHrsWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(1500);
  const [automationPct, setAutomationPct] = useState(70);

  const hrsSavedWeek = taskHrsWeek * (automationPct / 100);
  const kesSavedMonth = hrsSavedWeek * hourlyRate * 4;

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-card p-8 rounded-3xl border border-border transition-colors duration-500">
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Task hours / week: <span className="text-foreground ml-2">{taskHrsWeek}</span>
          </label>
          <input
            type="range"
            min={0}
            max={80}
            step={1}
            value={taskHrsWeek}
            onChange={(e) => setTaskHrsWeek(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={80}
            step={1}
            value={taskHrsWeek}
            onChange={(e) => setTaskHrsWeek(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Hourly rate (KES): <span className="text-foreground ml-2">{hourlyRate.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={0}
            max={10000}
            step={100}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={10000}
            step={100}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Automation potential (%): <span className="text-foreground ml-2">{automationPct}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={automationPct}
            onChange={(e) => setAutomationPct(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={100}
            step={5}
            value={automationPct}
            onChange={(e) => setAutomationPct(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-border bg-accent/30 p-6 shadow-sm backdrop-blur-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-montserrat">Hours saved / week</p>
          <p className="mt-2 text-4xl font-bold text-foreground font-playfair">
            {hrsSavedWeek.toFixed(1)} hrs
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-primary/20 bg-primary/10 p-8 shadow-md backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary/60 font-montserrat">KES saved / month</p>
          <p className="mt-2 text-4xl font-bold text-primary font-playfair">
            KES {kesSavedMonth.toLocaleString()}
          </p>
        </motion.div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold font-montserrat hover:opacity-90 transition-all shadow-lg"
        >
          Talk to us about this &rarr;
        </a>
        <p className="text-xs text-muted-foreground bg-accent/50 rounded-xl px-4 py-4 leading-relaxed font-montserrat italic">
          <span className="font-bold text-muted-foreground/80 uppercase mr-1">Logic:</span> Hours saved = task hours × automation %. Monthly saving = hours saved × hourly rate × 4 weeks. McKinsey estimates 60–70% of routine cognitive work is automatable today.
        </p>
      </div>
    </div>
  );
};

export default TimeSavedCalculator;
