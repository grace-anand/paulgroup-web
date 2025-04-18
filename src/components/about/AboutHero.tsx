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
              We are a premier infrastructure development company dedicated to
              creating exceptional spaces that enhance lives and communities.
              From affordable housing to cutting-edge commercial projects, we
              pride ourselves on delivering quality, innovation, and trust in
              every endeavor. Our journey is built on the foundation of
              commitment, excellence, and the vision to redefine modern living.
            </p>
            <p className="text-lg text-gray-700">
              With a customer-first approach, we strive to go beyond building
              structures—we craft lifestyles and experiences that resonate with
              comfort, convenience, and modernity. Our unwavering focus on
              sustainability and community development ensures that every
              project stands as a testament to our values and long-term vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
