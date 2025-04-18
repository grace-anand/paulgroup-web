import React from 'react';
import Image from 'next/image';

const ServicesHero = () => {
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 z-0 opacity-10">
        <Image
          src="https://ext.same-assets.com/165153690/651514672.svg"
          alt="Pattern"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 opacity-10">
        <Image
          src="https://ext.same-assets.com/165153690/2162258520.svg"
          alt="Pattern"
          width={300}
          height={300}
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            At Ruby Builders, we provide comprehensive construction and real estate solutions tailored to meet your unique needs. Our expert team delivers excellence at every stage, from planning to execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#residential" className="px-6 py-2 bg-primary text-white rounded-full transition hover:bg-opacity-90">
              Residential
            </a>
            <a href="#commercial" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full transition hover:bg-gray-200">
              Commercial
            </a>
            <a href="#plotDevelopment" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full transition hover:bg-gray-200">
              Plot Development
            </a>
            <a href="#consultancy" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full transition hover:bg-gray-200">
              Consultancy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
