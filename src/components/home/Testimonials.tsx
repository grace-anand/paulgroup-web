"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    image: "https://ext.same-assets.com/614157772/3870095690.jpeg",
    alt: "Client testimonial",
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/614157772/4117882800.jpeg",
    alt: "Client testimonial",
  },
  {
    id: 33,
    image: "https://ext.same-assets.com/614157772/373744013.jpeg",
    alt: "Client testimonial",
  },
  {
    id: 36,
    image: "https://ext.same-assets.com/614157772/154937503.jpeg",
    alt: "Client testimonial",
  },
  {
    id: 43,
    image: "https://ext.same-assets.com/614157772/3067857369.jpeg",
    alt: "Client testimonial",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Hear From Our
              <br />
              Happy <span className="italic text-secondary">Homeowners</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Our clients are at the heart of everything we do. Read their
              stories and experiences to see why we are the trusted choice for
              exceptional infrastructure and housing solutions.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    idx === activeIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
              onClick={() => {
                setActiveIndex((prevIndex) =>
                  prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1,
                );
              }}
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
              onClick={() => {
                setActiveIndex((prevIndex) =>
                  prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1,
                );
              }}
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
