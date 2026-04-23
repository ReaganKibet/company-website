// src/pages/Blog.tsx
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "How African Businesses Are Using Automation to Scale Smarter",
    excerpt:
      "From small enterprises to established brands, automation is becoming Africa’s silent growth engine. Here’s how Tatua is helping businesses unlock productivity through custom AI systems.",
    date: "October 10, 2025",
    author: "Tatua Insights Team",
    category: "Business Automation",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "The Future of AI Accessibility in Africa",
    excerpt:
      "AI shouldn’t be exclusive — it should be accessible. We break down what it takes to make artificial intelligence an inclusive force for progress across Africa’s industries.",
    date: "September 22, 2025",
    author: "Tatua Research",
    category: "AI Inclusion",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "5 Everyday Business Problems Automation Can Solve Instantly",
    excerpt:
      "From tracking expenses to managing client communication, learn the top automation ideas that can immediately free up your team’s time and focus.",
    date: "August 15, 2025",
    author: "Tatua Team",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1603791452906-c4b40f9c7ed7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Why Data is the Lifeblood of African Innovation",
    excerpt:
      "As Africa accelerates its digital transformation, structured and reliable data becomes central to the success of AI-driven innovation.",
    date: "July 28, 2025",
    author: "Tatua Editorial",
    category: "Data & Innovation",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80",
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white text-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Tatua Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Stories, strategies, and deep dives on how AI and automation are
            transforming Africa’s business landscape.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-white/5 border border-white/10"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between h-64">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-300 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  </div>

                  <div className="flex justify-between items-center text-gray-500 text-xs">
                    <div className="flex items-center gap-2">
                      <User size={14} /> {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5 text-center text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Want to Feature Your Story?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            We love highlighting innovators, founders, and brands leveraging AI
            for impact. Let’s share your journey with the world.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=254799422458&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-medium text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book a Chat with Tatua <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Blog;
