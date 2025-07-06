"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaLinks from "../shared/SocialMediaLinks";

const heroImgs = [
  "hero-img-1.jpeg",
  "natural-house.png",
  "modern-house.png",
  "compact-house.png",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 md:pt-32 lg:pt-40 overflow-hidden">
      <div className="container-custom mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Building The Future
              <br />
              With <span className="text-primary italic">Paul</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-md">
              Affordable housing, luxury villas, integrated townships, and
              cutting-edge infrastructure built with quality, safety, and
              precision to meet your aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
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
          <div className="order-1 lg:order-2 relative aspect-video">
            {heroImgs.map((img, index) => (
              <Image
                key={index}
                src={`/${img}`}
                alt={`Building Image ${index + 1}`}
                width={1200}
                height={800}
                className={` aspect-video rounded-lg object-cover absolute bottom-0 left-0 transition-opacity duration-1000 ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
