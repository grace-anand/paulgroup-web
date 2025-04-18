import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Us - Paul Builders",
  description:
    "Get in touch with Paul Builders. We are here to assist you with your real estate and construction needs. Contact our team for inquiries and support.",
};

export default function ContactUs() {
  return (
    <RootLayout>
      <ContactHero />
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
    </RootLayout>
  );
}
