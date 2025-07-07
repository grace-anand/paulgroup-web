import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-fb-lightGray pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Address */}
          <div className="flex gap-2 ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Paul Builders and Promoters - Return to homepage"
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p className="text-sm">
              Paul Builders,
              <br />
              PS Bhavan 1, Appattuvila,
              <br />
              Venkulam,
              <br />
              Trivandrum, Kerala, 695506
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contactUs"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            {/* <Link
              href="/groupCompany"
              className="text-foreground hover:text-primary transition-colors"
            >
              Group of Company
            </Link> */}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="text-sm font-semibold">+91 73565 69683</div>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="text-sm">+91 81294 69683</div>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-sm">paulgroup007@gmail.com</span>
            </div>
            <div className="flex space-x-3 mt-2">
              <a
                href="https://www.instagram.com/paul__group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.facebook.com/share/15SEUtH1Y7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://x.com/paulgroup007?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="https://ext.same-assets.com/165153690/4281502204.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">
              © Paul Builders - Designed and Developed by{" "}
              <a
                href="https://anandr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Anand
              </a>
              . All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
