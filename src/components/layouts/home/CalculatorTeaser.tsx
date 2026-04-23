import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorTeaser = () => {
  const [hrsWeek, setHrsWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(1500);

  const monthlySaving = Math.floor(hrsWeek * hourlyRate * 4 * 0.6);

  return (
    <section className="py-16 bg-background transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Quick ROI Estimate</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Hours/week on manual tasks: <span className="text-foreground font-bold">{hrsWeek} hrs</span>
              </label>
              <input
                type="range"
                min={1}
                max={60}
                value={hrsWeek}
                onChange={(e) => setHrsWeek(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 hr</span><span>60 hrs</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Your hourly rate: <span className="text-foreground font-bold">KES {hourlyRate.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min={500}
                max={10000}
                step={100}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>KES 500</span><span>KES 10,000</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-accent/30 rounded-2xl border border-border shadow-inner">
            <div className="font-montserrat">
              <p className="text-sm text-muted-foreground mb-1">You could save</p>
              <p className="text-3xl font-bold text-foreground font-playfair">
                KES {monthlySaving.toLocaleString()}
                <span className="text-lg font-medium text-muted-foreground font-montserrat">/month</span>
              </p>
            </div>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all duration-200 hover:scale-105 whitespace-nowrap font-montserrat uppercase text-xs tracking-widest shadow-lg"
            >
              See full breakdown
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorTeaser;
