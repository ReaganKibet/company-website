import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0";

const EmailAutomationCalculator = () => {
  const [emailsWeek, setEmailsWeek] = useState(200);
  const [hrsSpentWeek, setHrsSpentWeek] = useState(8);
  const [currentReplyRatePct, setCurrentReplyRatePct] = useState(20);

  const hrsSaved = (hrsSpentWeek * 0.6).toFixed(1);
  const replyRateImprovement = Math.min(
    100,
    Math.floor(currentReplyRatePct * 1.3)
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-card p-8 rounded-3xl border border-border transition-colors duration-500">
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Emails / week: <span className="text-foreground ml-2">{emailsWeek}</span>
          </label>
          <input
            type="range"
            min={0}
            max={2000}
            step={10}
            value={emailsWeek}
            onChange={(e) => setEmailsWeek(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={2000}
            step={10}
            value={emailsWeek}
            onChange={(e) => setEmailsWeek(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Hrs spent on email / week: <span className="text-foreground ml-2">{hrsSpentWeek}</span>
          </label>
          <input
            type="range"
            min={0}
            max={40}
            step={1}
            value={hrsSpentWeek}
            onChange={(e) => setHrsSpentWeek(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={40}
            step={1}
            value={hrsSpentWeek}
            onChange={(e) => setHrsSpentWeek(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Current reply rate (%): <span className="text-foreground ml-2">{currentReplyRatePct}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={currentReplyRatePct}
            onChange={(e) => setCurrentReplyRatePct(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={100}
            step={1}
            value={currentReplyRatePct}
            onChange={(e) => setCurrentReplyRatePct(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-border bg-accent/30 p-6 shadow-sm backdrop-blur-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-montserrat">Hrs saved / week</p>
          <p className="mt-2 text-4xl font-bold text-foreground font-playfair">
            {hrsSaved} hrs
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-primary/20 bg-primary/10 p-8 shadow-md backdrop-blur-sm relative overflow-hidden"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary/60 font-montserrat">Projected reply rate</p>
          <p className="mt-2 text-4xl font-bold text-primary font-playfair">
            {replyRateImprovement}%
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
          <span className="font-bold text-muted-foreground/80 uppercase mr-1">Logic:</span> A 60% time saving reflects automation of routine replies. The 30% reply rate improvement is based on personalization and optimal send-time data from industry benchmarks.
        </p>
      </div>
    </div>
  );
};

export default EmailAutomationCalculator;
