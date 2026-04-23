import { LucideArrowUpRightFromCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 bg-background transition-colors duration-500">
      {/* Image */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src="https://www.brookings.edu/wp-content/uploads/2024/03/shutterstock_1927485296.jpg"
          alt="AI in Africa"
          className="w-full max-w-lg md:max-w-2xl h-auto transition-transform duration-300 ease-out rounded-2xl object-cover shadow-lg border border-border"
          loading="eager"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl text-muted-foreground font-sans">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-sans text-foreground">
          Crafting Africa’s Intelligent Future
        </h2>
        <p className="text-lg md:text-xl mb-6 font-light text-muted-foreground">
          We connect M-Pesa, WhatsApp, Bolt, and your CRM into autonomous agents that run themselves. Whether you're reconciling daily transactions, chasing dead leads, or managing a fleet — Tatua builds the automation your team has been waiting for.
        </p>
        <Link
          to="/about"
          className="inline-block border border-border text-foreground bg-accent/50 font-semibold py-1.5 px-3 rounded-full text-lg shadow hover:bg-accent transition-all duration-200 hover:scale-105"
        >
          About Us
          <LucideArrowUpRightFromCircle className="inline-block ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Community;
