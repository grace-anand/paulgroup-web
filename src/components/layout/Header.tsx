"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Paul Builders and Promoters - Return to homepage"
              width={60}
              height={60}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Services
            </Link>
            <Link
              href="/aboutUs"
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contactUs"
              className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white mt-20 overflow-y-auto">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary font-semibold py-2"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="text-foreground hover:text-primary font-semibold py-2"
              >
                Services
              </Link>
              <Link
                href="/aboutUs"
                className="text-foreground hover:text-primary font-semibold py-2"
              >
                About Us
              </Link>
              <Link
                href="/contactUs"
                className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block w-fit"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
