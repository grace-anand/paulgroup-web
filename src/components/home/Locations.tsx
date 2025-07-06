import React from "react";
import Link from "next/link";
import Image from "next/image";

const Locations = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Find your Perfect Dream{" "}
            <span className="italic text-secondary">Home</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our projects across prime locations. Select your preferred
            area and take the first step toward finding your ideal home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Trivandrum */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/natural-house.png"
              alt="Trivandrum"
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-6">Trivandrum</h3>
            </div>
          </div>

          {/* Ernakulam */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/modern-house.png"
              alt="Ernakulam"
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-6">Ernakulam</h3>
            </div>
          </div>

          {/* Kozhikode */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/compact-house.png"
              alt="Kozhikode"
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-bold mb-6">Kozhikode</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
