import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  Car,
  Stethoscope,
  Banknote,
  Megaphone,
  BarChart3,
  Layers,
  UserCheck,
} from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      title: "Financial Services",
      description:
        "From microfinance institutions to fintech startups, Tatua helps financial providers automate routine operations — loan tracking, reconciliation, KYC, and transaction monitoring — using AI systems that reduce fraud and increase efficiency.",
      icon: <Banknote className="w-10 h-10 text-white" />,
      gradient: "from-gray-700 to-gray-900",
      metric: "Saves 8 hrs/week on reconciliation",
      useCases: [
        "Automated payment reconciliation between banks and mobile money APIs",
        "Chatbots for customer onboarding and account support",
        "Predictive analytics for loan repayment forecasting",
      ],
    },
    {
      title: "E-commerce & Retail",
      description:
        "We empower online and offline sellers to better understand their customers and automate sales agents. From personalized WhatsApp marketing bots to inventory monitoring, Tatua creates AI systems that drive sales and retention.",
      icon: <ShoppingBag className="w-10 h-10 text-white" />,
      gradient: "from-gray-600 to-gray-800",
      metric: "Recovers 25% of abandoned carts",
      useCases: [
        "WhatsApp bots for catalog browsing and product recommendations",
        "Automated feedback collection after purchase",
        "AI-powered sales dashboards with demand predictions",
      ],
    },
    {
      title: "Transport & Logistics",
      description:
        "For fleet-based businesses and delivery services, Tatua builds automations that track activity, payments, and performance in real time — cutting down on manual oversight and missed updates.",
      icon: <Car className="w-10 h-10 text-white" />,
      gradient: "from-gray-500 to-gray-700",
      metric: "12 hrs/week saved on manual tracking",
      useCases: [
        "Bolt & Uber API integrations for daily remittance tracking",
        "Attendance and accountability bots for drivers and dispatchers",
        "WhatsApp-based onboarding flows for new riders or partners",
      ],
    },
    {
      title: "Healthcare",
      description:
        "We design data-driven automation for healthcare providers and clinics — reducing administrative load while keeping patient data secure. AI chatbots manage patient bookings, reminders, and follow-ups for better care continuity.",
      icon: <Stethoscope className="w-10 h-10 text-white" />,
      gradient: "from-gray-700 to-black",
      metric: "40% reduction in missed appointments",
      useCases: [
        "Appointment reminders via WhatsApp and SMS",
        "AI assistants that collect patient information pre-visit",
        "Data dashboards for patient outcomes and medication tracking",
      ],
    },
    {
      title: "Education & Learning",
      description:
        "Tatua supports schools and edtech startups with automations that simplify registration, course delivery, and student engagement through conversational interfaces and analytics.",
      icon: <Layers className="w-10 h-10 text-white" />,
      gradient: "from-gray-600 to-gray-900",
      metric: "Automates 60% of admin tasks",
      useCases: [
        "Automated enrollment and fee reminders",
        "AI-powered progress tracking dashboards for teachers",
        "Virtual tutors and chat-based student help desks",
      ],
    },
    {
      title: "Marketing & Communications",
      description:
        "We build intelligent marketing automations that help brands personalize outreach, collect leads, and measure campaign performance across WhatsApp, social media, and email.",
      icon: <Megaphone className="w-10 h-10 text-white" />,
      gradient: "from-gray-800 to-black",
      metric: "30% improvement in lead response time",
      useCases: [
        "AI agents that qualify leads in real-time via WhatsApp",
        "Sentiment analysis for customer feedback and reviews",
        "Automated reports on engagement, reach, and conversions",
      ],
    },
    {
      title: "Manufacturing & Supply Chain",
      description:
        "We help factories and distributors use AI to manage inventory, quality control, and logistics. Our solutions ensure timely production, reduced wastage, and improved delivery visibility.",
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      gradient: "from-gray-700 to-gray-900",
      metric: "Reduces stock-outs by 35%",
      useCases: [
        "Predictive maintenance for machinery",
        "Inventory level alerts and reorder automations",
        "AI analytics for supply-demand forecasting",
      ],
    },
    {
      title: "Public Sector & NGOs",
      description:
        "Tatua collaborates with government agencies and nonprofits to digitize operations with AI agents for citizen engagement, data reporting, and social impact measurement.",
      icon: <Building2 className="w-10 h-10 text-white" />,
      gradient: "from-gray-600 to-gray-800",
      metric: "3x faster beneficiary reporting",
      useCases: [
        "Chatbots for citizen feedback collection",
        "Automated beneficiary data verification",
        "Impact dashboards for policy tracking",
      ],
    },
    {
      title: "Personal Productivity & Executive Reporting",
      description:
        "For founders and executives drowning in weekly reports, Tatua builds automated dashboards that compile data from multiple sources and deliver ready-to-share summaries — freeing up Friday afternoons.",
      icon: <UserCheck className="w-10 h-10 text-white" />,
      gradient: "from-gray-500 to-gray-700",
      metric: "Saves 4 hrs/week on reporting",
      useCases: [
        "Automated weekly/monthly business reports",
        "AI-compiled performance dashboards",
        "Voice or WhatsApp-triggered report generation",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white text-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1648737965890-82b1f345962f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Tatua has deployed automations for transport companies, apparel brands, car washes, and insurance firms. Here's what that looks like by sector.
          </motion.p>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Industry-Focused AI Solutions
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Every industry faces unique challenges — Tatua’s approach is to
              design flexible, human-centered AI systems that deliver measurable
              business value across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-white/5 shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 group hover:-translate-y-2"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${industry.gradient} rounded-t-2xl`}
                />
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    {industry.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-white">
                    {industry.title}
                  </h3>
                </div>
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-semibold border border-white/20">
                  {industry.metric}
                </span>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                  {industry.useCases.map((useCase, i) => (
                    <li key={i}>{useCase}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5 text-center text-white relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-white"
          >
            Ready to Bring AI Into Your Operations?
          </motion.h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let’s explore how Tatua can tailor automation and data intelligence
            to your business — from the first strategy call to a live
            deployment.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-medium text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Talk to an AI Consultant
          </a>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
