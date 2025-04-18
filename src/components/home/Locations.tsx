import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Locations = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Find your Perfect Dream <span className="italic text-secondary">Home</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our projects across prime locations. Select your preferred area and take the first step toward finding your ideal home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Chennai */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="https://ext.same-assets.com/165153690/3840016385.webp"
              alt="Chennai"
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-6">CHENNAI</h3>
              <Link
                href="/projects?district=Chennai"
                className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Tirunelveli */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="https://ext.same-assets.com/165153690/844805949.webp"
              alt="Tirunelveli"
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-6">TIRUNELVELI</h3>
              <Link
                href="/projects?district=Tirunelveli"
                className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Chengalpattu */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="https://ext.same-assets.com/165153690/3840016385.webp"
              alt="Chengalpattu"
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-6">CHENGALPATTU</h3>
              <Link
                href="/projects?district=Chengalpattu"
                className="bg-white text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
