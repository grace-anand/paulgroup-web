import React from 'react';
import RootLayout from '@/components/layout/RootLayout';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Locations from '@/components/home/Locations';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <Stats />
      <Locations />
      <Testimonials />
      <ContactCTA />
    </RootLayout>
  );
}
