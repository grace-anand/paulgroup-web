import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import AboutHero from "@/components/about/AboutHero";
import Leadership from "@/components/about/Leadership";
import Vision from "@/components/about/Vision";
import Journey from "@/components/about/Journey";
import Achievements from "@/components/about/Achievements";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "About Us - Paul Builders",
  description:
    "Learn about Paul Builders, our vision, mission, and leadership team. Discover our journey of excellence in real estate development.",
};

export default function AboutUs() {
  return (
    <RootLayout>
      <AboutHero />
      <Leadership />
      <Vision />
      <Journey />
      <Achievements />
      <Testimonials />
    </RootLayout>
  );
}
