"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaLinks from "../shared/SocialMediaLinks";

const heroImgs = [
  "hero-img-3.jpg",
  "hero-img-4.jpg",
  "hero-img-2.jpg",
  "hero-img-1.jpeg",
  "hero-img-5.jpg",
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
    <section
      className="bg-white flex items-center overflow-hidden relative"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="container-custom mx-auto z-10 w-full">
        <div className="relative w-full">
          <div className="absolute inset-0 min-h-[calc(100vh-64px)] w-full overflow-hidden">
            {heroImgs.map((img, index) => (
              <Image
                key={index}
                src={`/${img}`}
                alt={`Building Image ${index + 1}`}
                fill
                className={`object-cover transition-all duration-3000 ${
                  currentImageIndex === index
                    ? "opacity-1 scale-110"
                    : "opacity-0 scale-100"
                }`}
                style={{
                  transform:
                    currentImageIndex === index ? "scale(1.1)" : "scale(1)",
                  transition: "transform 3s ease-out, opacity 1s ease-in-out",
                }}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="relative z-10 grid  gap-8 items-center justify-center h-full text-center place-items-center min-h-[calc(100vh-64px)]">
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-center w-full mix-blend-difference">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-center text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
                Building The Future
                <br />
                With <span className="text-primary italic">Paul</span>
              </h1>
              <p className="text-lg mb-8 text-white max-w-md text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
                Affordable housing, luxury villas, integrated townships, and
                cutting-edge infrastructure built with quality, safety, and
                precision to meet your aspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <Link
                  href="/contactUs"
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center justify-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
                >
                  Contact Us
                </Link>
                <div className="hidden sm:block">
                  <SocialMediaLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
