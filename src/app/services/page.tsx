import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServiceProcess from "@/components/services/ServiceProcess";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Services - Paul Builders",
  description:
    "Explore our comprehensive range of real estate and construction services. From residential to commercial projects, we deliver excellence in every aspect.",
};

export default function Services() {
  return (
    <RootLayout>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ContactCTA />
    </RootLayout>
  );
}
