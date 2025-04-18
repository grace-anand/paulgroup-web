'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/165153690/3678318986.png"
              alt="Ruby Builders and Promoters - Return to homepage"
              width={100}
              height={50}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary font-semibold transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary font-semibold transition-colors">
                Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <h4 className="px-4 py-2 font-semibold">Flat/Apartments</h4>
                <Link href="/projects?district=Chennai" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Chennai
                </Link>
                <Link href="/projects?district=Tirunelveli" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Tirunelveli
                </Link>
                <Link href="/projects?district=Chengalpattu" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Chengalpattu
                </Link>
                <h4 className="px-4 py-2 font-semibold mt-2">Plot</h4>
                <Link href="/plot?district=Chennai" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Chennai
                </Link>
                <Link href="/plot?district=Tirunelveli" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Tirunelveli
                </Link>
                <Link href="/plot?district=Chengalpattu" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Chengalpattu
                </Link>
              </div>
            </div>
            <Link href="/services" className="text-foreground hover:text-primary font-semibold transition-colors">
              Services
            </Link>
            <Link href="/aboutUs" className="text-foreground hover:text-primary font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/specialOffers" className="text-foreground hover:text-primary font-semibold transition-colors">
              Special Offers
            </Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary font-semibold transition-colors">
                Our Stories
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                <Link href="/groupCompany" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Group of Company
                </Link>
                <Link href="/partnerWith" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Partner with us
                </Link>
                <Link href="/news" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  News
                </Link>
                <Link href="/csr" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  CSR
                </Link>
                <Link href="/events" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Events
                </Link>
                <Link href="/careers" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary">
                  Careers
                </Link>
              </div>
            </div>
            <Link href="/contactUs" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
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
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary font-semibold py-2">
                Home
              </Link>
              <div className="py-2">
                <div className="font-semibold mb-2">Projects</div>
                <div className="pl-4">
                  <h4 className="font-semibold my-2">Flat/Apartments</h4>
                  <Link href="/projects?district=Chennai" className="block py-1 text-sm hover:text-primary">
                    Chennai
                  </Link>
                  <Link href="/projects?district=Tirunelveli" className="block py-1 text-sm hover:text-primary">
                    Tirunelveli
                  </Link>
                  <Link href="/projects?district=Chengalpattu" className="block py-1 text-sm hover:text-primary">
                    Chengalpattu
                  </Link>
                  <h4 className="font-semibold my-2 mt-3">Plot</h4>
                  <Link href="/plot?district=Chennai" className="block py-1 text-sm hover:text-primary">
                    Chennai
                  </Link>
                  <Link href="/plot?district=Tirunelveli" className="block py-1 text-sm hover:text-primary">
                    Tirunelveli
                  </Link>
                  <Link href="/plot?district=Chengalpattu" className="block py-1 text-sm hover:text-primary">
                    Chengalpattu
                  </Link>
                </div>
              </div>
              <Link href="/services" className="text-foreground hover:text-primary font-semibold py-2">
                Services
              </Link>
              <Link href="/aboutUs" className="text-foreground hover:text-primary font-semibold py-2">
                About Us
              </Link>
              <Link href="/specialOffers" className="text-foreground hover:text-primary font-semibold py-2">
                Special Offers
              </Link>
              <div className="py-2">
                <div className="font-semibold mb-2">Our Stories</div>
                <div className="pl-4">
                  <Link href="/groupCompany" className="block py-1 text-sm hover:text-primary">
                    Group of Company
                  </Link>
                  <Link href="/partnerWith" className="block py-1 text-sm hover:text-primary">
                    Partner with us
                  </Link>
                  <Link href="/news" className="block py-1 text-sm hover:text-primary">
                    News
                  </Link>
                  <Link href="/csr" className="block py-1 text-sm hover:text-primary">
                    CSR
                  </Link>
                  <Link href="/events" className="block py-1 text-sm hover:text-primary">
                    Events
                  </Link>
                  <Link href="/careers" className="block py-1 text-sm hover:text-primary">
                    Careers
                  </Link>
                </div>
              </div>
              <Link href="/contactUs" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block w-fit">
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
