// src/pages/CaseStudies.tsx
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Iconic Fusion",
    industry: "Transport & Finance",
    problem:
      "Manually tracking which riders went to work but failed to remit money at the end of the day was time-consuming and error-prone.",
    solution:
      "Tatua created an automation integrated with the Bolt API and the company’s bank to reconcile attendance and remittance in real-time. Additionally, new riders can register automatically through a WhatsApp chatbot without staff intervention.",
    impact:
      "Saved significant administrative hours and improved financial accountability, enabling the company to focus on customer support and expansion.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    title: "Tinlip Autocare",
    industry: "Insurance & Customer Relations",
    problem:
      "Manually reminding subscribers to renew policies over WhatsApp was tedious and often led to missed renewals and inconsistent records.",
    solution:
      "Tatua developed an automation that sends personalized reminders, provides M-Pesa payment links, logs payments, and schedules the next reminder automatically.",
    impact:
      "Improved renewal rates, enhanced customer experience, and eliminated manual bookkeeping tasks.",
    video: "https://www.w3schools.com/html/movie.mp4",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    title: "DrinkSwig / Organic Bistro",
    industry: "Retail & Event Sales",
    problem:
      "During events, collecting feedback and tracking sales manually was unreliable. M-Pesa statements lacked clarity for post-event analysis.",
    solution:
      "Tatua built a QR-based payment system that logs sales directly to Google Sheets and prompts customers for feedback on WhatsApp after purchase.",
    impact:
      "Enabled post-event engagement, better sales tracking, and stronger customer relationships.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    gradient: "from-gray-500 to-gray-700",
  },
  {
    title: "Noist Apparel & Odamo Wear",
    industry: "Fashion & Retail",
    problem:
      "Recording numerous daily transactions manually in notebooks was inefficient and prone to error.",
    solution:
      "Tatua designed a Telegram/WhatsApp voice-note system that automatically transcribes and logs transactions into Google Sheets, even categorizing payments automatically.",
    impact:
      "Improved bookkeeping accuracy and saved hours in daily financial organization.",
    video: "https://www.w3schools.com/html/movie.mp4",
    gradient: "from-gray-700 to-black",
  },
  {
    title: "LinkedIn Local Kenya Members",
    industry: "Professional Branding",
    problem:
      "Members found it hard to consistently post or engage on LinkedIn, reducing visibility and networking opportunities.",
    solution:
      "Tatua deployed an automation that learns members’ industries, curates content, and auto-posts relevant updates with citations to drive engagement.",
    impact:
      "Members now have active, professional profiles that consistently attract new partnerships and conversations.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    gradient: "from-gray-800 to-black",
  },
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white text-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603791452906-c4b40f9c7ed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Real businesses. Real results. See how Tatua’s automations are
            transforming Africa’s enterprises.
          </motion.p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-10 rounded-3xl shadow-md bg-white/5 border border-white/10 text-white flex flex-col md:flex-row items-center gap-10`}
            >
              {/* Video Section */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <video
                  src={study.video}
                  controls
                  className="w-full h-full rounded-2xl"
                  poster="https://images.unsplash.com/photo-1604881981344-2b858b1ff8b4?auto=format&fit=crop&w=800&q=80"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-2 text-white">{study.title}</h2>
                <p className="text-sm text-gray-400 mb-4 italic">
                  {study.industry}
                </p>

                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="font-semibold text-white">Problem:</span>{" "}
                    {study.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Solution:</span>{" "}
                    {study.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Impact:</span>{" "}
                    {study.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5 text-center text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Ready to Build Your Own Success Story?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let’s explore how Tatua can create an automation that fits your
            business model perfectly — and amplifies your impact.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-medium text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
