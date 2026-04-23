import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0";

const PersonalReportingCalculator = () => {
  const [reportsMonth, setReportsMonth] = useState(8);
  const [hrsPerReport, setHrsPerReport] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(2000);

  const timeFreed = (reportsMonth * hrsPerReport * 0.75).toFixed(1);
  const annualisedSaving = Math.floor(
    parseFloat((reportsMonth * hrsPerReport * 0.75).toFixed(1)) *
      hourlyRate *
      12
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-card p-8 rounded-3xl border border-border transition-colors duration-500">
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Reports / month: <span className="text-foreground ml-2">{reportsMonth}</span>
          </label>
          <input
            type="range"
            min={0}
            max={50}
            step={1}
            value={reportsMonth}
            onChange={(e) => setReportsMonth(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={50}
            step={1}
            value={reportsMonth}
            onChange={(e) => setReportsMonth(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Hrs per report: <span className="text-foreground ml-2">{hrsPerReport}</span>
          </label>
          <input
            type="range"
            min={0}
            max={10}
            step={0.5}
            value={hrsPerReport}
            onChange={(e) => setHrsPerReport(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={10}
            step={0.5}
            value={hrsPerReport}
            onChange={(e) => setHrsPerReport(Number(e.target.value))}
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
      </div>

      <div className="space-y-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-border bg-accent/30 p-6 shadow-sm backdrop-blur-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-montserrat">Time freed / month</p>
          <p className="mt-2 text-4xl font-bold text-foreground font-playfair">
            {timeFreed} hrs
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-primary/20 bg-primary/10 p-8 shadow-md backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary/60 font-montserrat">Annualised saving</p>
          <p className="mt-2 text-4xl font-bold text-primary font-playfair">
            KES {annualisedSaving.toLocaleString()}
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
          <span className="font-bold text-muted-foreground/80 uppercase mr-1">Logic:</span> 70–80% of report-building time is spent on data collection and formatting — not analysis. Automation handles that 75%, leaving only the judgement calls to you.
        </p>
      </div>
    </div>
  );
};

export default PersonalReportingCalculator;
