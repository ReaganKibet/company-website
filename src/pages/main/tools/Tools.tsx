import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import TimeSavedCalculator from "../../../components/calculators/TimeSavedCalculator";
import ROICalculator from "../../../components/calculators/ROICalculator";
import WhatsAppFollowUpCalculator from "../../../components/calculators/WhatsAppFollowUpCalculator";
import BookkeepingCalculator from "../../../components/calculators/BookkeepingCalculator";
import SocialMediaCalculator from "../../../components/calculators/SocialMediaCalculator";
import DeadLeadsCalculator from "../../../components/calculators/DeadLeadsCalculator";
import SmartSurveillanceCalculator from "../../../components/calculators/SmartSurveillanceCalculator";
import EmailAutomationCalculator from "../../../components/calculators/EmailAutomationCalculator";
import PersonalReportingCalculator from "../../../components/calculators/PersonalReportingCalculator";

const tabs = [
  { value: "time-saved", label: "Time Saved", component: <TimeSavedCalculator /> },
  { value: "roi", label: "ROI", component: <ROICalculator /> },
  { value: "whatsapp", label: "WhatsApp", component: <WhatsAppFollowUpCalculator /> },
  { value: "email", label: "Email", component: <EmailAutomationCalculator /> },
  { value: "dead-leads", label: "Dead Leads", component: <DeadLeadsCalculator /> },
  { value: "bookkeeping", label: "Bookkeeping", component: <BookkeepingCalculator /> },
  { value: "surveillance", label: "Surveillance", component: <SmartSurveillanceCalculator /> },
  { value: "social-media", label: "Social Media", component: <SocialMediaCalculator /> },
  { value: "reporting", label: "Reporting", component: <PersonalReportingCalculator /> },
];

const Tools = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const validTabs = tabs.map((t) => t.value);
  const defaultTab = tabParam && validTabs.includes(tabParam) ? tabParam : "time-saved";

  return (
    <div className="min-h-screen bg-background text-foreground font-montserrat transition-colors duration-500">
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden border-b border-border">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold md:text-6xl font-playfair mb-6 text-foreground"
          >
            Calculate Your ROI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-montserrat"
          >
            See exactly how much time and money Tatua can save your business
            &mdash; before making any commitment.
          </motion.p>
        </div>
      </section>

      {/* Tabs section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <Tabs.Root defaultValue={defaultTab}>
            <Tabs.List className="mb-12 flex gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-border">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 font-montserrat
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg
                  data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-accent"
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value} className="focus:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {tab.component}
                </motion.div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </section>
    </div>
  );
};

export default Tools;
