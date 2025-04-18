import React from "react";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We're here to guide you-connect with us
          </h2>
          <p className="text-gray-700 mb-8">
            Have questions or need guidance? Our team is always ready to assist
            you with personalized support and expert advice. Reach out to us
            anytime—it's our pleasure to help you
          </p>
          <Link
            href="/contactUs"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors inline-block"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
