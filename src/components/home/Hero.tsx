import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaLinks from "../shared/SocialMediaLinks";

const Hero = () => {
  return (
    <section className="relative bg-white pb-12 pt-24 md:pt-32 lg:pt-40 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 z-0 opacity-20">
        <Image
          src="https://ext.same-assets.com/165153690/868398034.svg"
          alt="Background pattern"
          width={600}
          height={600}
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Building <br />
              The Future With <span className="text-primary italic">Paul</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-md">
              Affordable housing, luxury villas, integrated townships, and
              cutting-edge infrastructure built with quality, safety, and
              precision to meet your aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contactUs"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
              <div className="hidden sm:block">
                <SocialMediaLinks />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <Image
              src="https://ext.same-assets.com/165153690/3786047082.webp"
              alt="BuildingImage"
              width={600}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
