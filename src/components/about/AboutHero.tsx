import React from "react";
import Image from "next/image";

const AboutHero = () => {
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
          <h1 className="text-5xl md:text-6xl font-black mb-6">About Us</h1>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who we are</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2019, we are a modern construction company dedicated to
              delivering quality homes and renovations for families and
              individuals across Kerala. Our journey is defined by agility,
              innovation, and a strong commitment to customer satisfaction.
            </p>
            <p className="text-lg text-gray-700">
              In just five years, we've helped dozens of clients realize their
              dream homes, focusing on transparency, personalized service, and
              sustainable building practices. We believe in building lasting
              relationships as much as we build lasting homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
