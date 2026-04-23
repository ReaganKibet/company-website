import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0";

const SocialMediaCalculator = () => {
  const [postsWeek, setPostsWeek] = useState(5);
  const [hrsPerPost, setHrsPerPost] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(1500);
  const [monthlyLeadsSocial, setMonthlyLeadsSocial] = useState(20);

  const hrsSavedWeek = (postsWeek * hrsPerPost * 0.7).toFixed(1);
  const estimatedLeadUplift = Math.floor(monthlyLeadsSocial * 0.2);

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-card p-8 rounded-3xl border border-border transition-colors duration-500">
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Posts / week: <span className="text-foreground ml-2">{postsWeek}</span>
          </label>
          <input
            type="range"
            min={0}
            max={30}
            step={1}
            value={postsWeek}
            onChange={(e) => setPostsWeek(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={30}
            step={1}
            value={postsWeek}
            onChange={(e) => setPostsWeek(Number(e.target.value))}
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground font-montserrat focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">
            Hrs per post: <span className="text-foreground ml-2">{hrsPerPost}</span>
          </label>
          <input
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={hrsPerPost}
            onChange={(e) => setHrsPerPost(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={5}
            step={0.5}
            value={hrsPerPost}
            onChange={(e) => setHrsPerPost(Number(e.target.value))}
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
            Monthly leads from social: <span className="text-foreground ml-2">{monthlyLeadsSocial}</span>
          </label>
          <input
            type="range"
            min={0}
            max={500}
            step={5}
            value={monthlyLeadsSocial}
            onChange={(e) => setMonthlyLeadsSocial(Number(e.target.value))}
            className="w-full h-1.5 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <input
            type="number"
            min={0}
            max={500}
            step={5}
            value={monthlyLeadsSocial}
            onChange={(e) => setMonthlyLeadsSocial(Number(e.target.value))}
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
            {hrsSavedWeek} hrs
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-primary/20 bg-primary/10 p-8 shadow-md backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary/60 font-montserrat">Estimated extra leads / month</p>
          <p className="mt-2 text-4xl font-bold text-primary font-playfair">
            {estimatedLeadUplift}
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
          <span className="font-bold text-muted-foreground/80 uppercase mr-1">Logic:</span> A 70% time reduction is consistent with AI drafting tools. Lead uplift uses a conservative 20% estimate drawn from social media automation studies.
        </p>
      </div>
    </div>
  );
};

export default SocialMediaCalculator;
