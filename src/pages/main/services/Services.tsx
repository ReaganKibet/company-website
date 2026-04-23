// src/pages/Services.tsx
import { motion } from "framer-motion";
import { Brain, Workflow, Bot, LineChart, Database, Zap, Eye, RefreshCw, Share2, Banknote, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Automation & AI Agents",
      description:
        "We help organizations eliminate repetitive manual work by building autonomous agents that connect their apps and tools — from CRMs to payment systems — for real-time, error-free operations.",
      icon: <Cpu className="w-10 h-10" />,
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description:
        "We design conversational AI systems that engage customers naturally — whether through WhatsApp, Telegram, or websites — enabling businesses to provide instant, round-the-clock support and sales automation.",
      icon: <Bot className="w-10 h-10" />,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      title: "Predictive Analytics & Decision Intelligence",
      description:
        "We build data models that turn your company data into foresight — from sales forecasting to customer behavior insights — empowering leadership with actionable intelligence to make faster, smarter decisions.",
      icon: <LineChart className="w-10 h-10" />,
      gradient: "from-gray-500 to-gray-700",
    },
    {
      title: "Custom AI Integrations",
      description:
        "We integrate AI tools directly into your existing systems — CRMs, accounting software, ERPs, or marketing platforms — so that automation feels seamless, not disruptive.",
      icon: <Zap className="w-10 h-10" />,
      gradient: "from-gray-700 to-black",
    },
    {
      title: "Data Infrastructure & Optimization",
      description:
        "We help businesses structure, clean, and centralize their data, creating reliable foundations for automation, analytics, and machine learning models.",
      icon: <Database className="w-10 h-10" />,
      gradient: "from-gray-600 to-gray-900",
    },
    {
      title: "AI Strategy & Consultation",
      description:
        "For organizations beginning their AI journey, we offer strategy sessions to identify where automation delivers the highest ROI, helping you adopt AI with clarity and measurable impact.",
      icon: <Brain className="w-10 h-10" />,
      gradient: "from-gray-800 to-black",
    },
    {
      title: "M-Pesa & Mobile Money Automation",
      description:
        "Auto-reconciliation of M-Pesa transactions, statement generation, and accountant-ready exports — so your team stops spending hours on mobile banking records.",
      icon: <Banknote className="w-10 h-10" />,
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "Smart Surveillance & Computer Vision",
      description:
        "AI analysis of CCTV and video feeds — vehicle counting, crowd monitoring, and anomaly detection — turning passive cameras into active business intelligence.",
      icon: <Eye className="w-10 h-10" />,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      title: "Dead Leads Reactivation",
      description:
        "AI-timed WhatsApp and email sequences that re-engage cold prospects at the right moment — turning a dormant pipeline into closed deals.",
      icon: <RefreshCw className="w-10 h-10" />,
      gradient: "from-gray-500 to-gray-700",
    },
    {
      title: "Social Media Content Automation",
      description:
        "AI drafts and schedules posts from a brief, tracks engagement, and surfaces insights — so your brand stays active without manual effort.",
      icon: <Share2 className="w-10 h-10" />,
      gradient: "from-gray-700 to-black",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-24 bg-background text-foreground text-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616628182509-7b9e648c2e7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5 dark:opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat"
          >
            We build the automations your operations team has been asking for — connected to M-Pesa, WhatsApp, your CRM, and whatever else runs your business.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground font-playfair">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-montserrat">
              From strategy to deployment, Tatua delivers custom-built AI and
              automation solutions that simplify operations and accelerate
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-2"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-primary rounded-t-2xl`}
                />
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent group-hover:scale-110 transition-transform duration-300 shadow-inner border border-border">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-montserrat">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card text-center text-foreground relative border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-foreground font-playfair"
          >
            Let’s Automate Your Business
          </motion.h2>
          <p className="text-muted-foreground mb-10 text-lg font-montserrat">
            Whether you're a startup or enterprise, Tatua helps you design and
            deploy AI systems that let you focus on what matters — people,
            innovation, and growth.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 font-medium text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
