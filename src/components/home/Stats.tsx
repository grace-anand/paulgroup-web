import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 z-0 opacity-10">
        <Image
          src="https://ext.same-assets.com/165153690/868398034.svg"
          alt="Background pattern"
          width={500}
          height={500}
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-6xl md:text-7xl font-black text-primary mb-2 italic">RU</h2>
            <h2 className="text-6xl md:text-7xl font-black text-primary italic">BY</h2>
            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">The Responsible</h3>
              <h3 className="text-2xl md:text-3xl font-bold">Builder of <span className="italic text-secondary">India</span></h3>
            </div>
            <p className="max-w-md my-6 text-gray-700">
              Being one of the top real estate home builders in Tamilnadu, we bring you a new array of apartments, flats, and villas that match your requirements and complement your lifestyle. We differ from other home builders in Tamilnadu with our unique styles and perceptions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary italic mb-2">4.1 Million sq.ft</p>
              <p className="text-gray-700">Saleable Area</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary italic mb-2">5800+</p>
              <p className="text-gray-700">Happy Homes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary italic mb-2">190+</p>
              <p className="text-gray-700">Project Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary italic mb-2">25+</p>
              <p className="text-gray-700">Awards</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <Link
            href="/aboutUs"
            className="flex items-center text-foreground hover:text-primary group"
          >
            <span className="mr-2 font-semibold">Know more about Ruby</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
