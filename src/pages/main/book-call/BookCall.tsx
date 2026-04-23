import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Calendar, Clock, ArrowRight } from "lucide-react";

const BookCall = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white text-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Book a Call with Tatua
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Have a business challenge that could use automation or AI?  
            Let’s talk. Our team will help you identify the right solution for your goals — fast, simple, and tailored to your operations.
          </motion.p>
        </div>
      </section>

      {/* Why Book a Call */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Why Book a Call with Tatua?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Every conversation starts with understanding. We’ll explore your pain points and show you practical AI and automation tools that can transform how your business operates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-8 border border-white/10 bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <PhoneCall className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Personal Consultation
              </h3>
              <p className="text-gray-400">
                Speak directly with a Tatua expert about your business needs.  
                No jargon, just actionable advice.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-8 border border-white/10 bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <MessageSquare className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Tailored Recommendations
              </h3>
              <p className="text-gray-400">
                Discover automations and AI agents specific to your challenges — from customer engagement to data management.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-8 border border-white/10 bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Calendar className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Flexible Scheduling
              </h3>
              <p className="text-gray-400">
                Choose a time that works for you. Our consultations are conducted online via WhatsApp or Google Meet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-white/5 text-center text-white border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <Clock className="w-12 h-12 mx-auto text-gray-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Let’s Get Started
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Your next step toward smarter business systems starts here.  
            Schedule your call today and experience how Tatua can transform your operations.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-medium text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book a Call Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default BookCall;
