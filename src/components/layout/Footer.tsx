import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-ruby-lightGray pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/165153690/3678318986.png"
                alt="Ruby Builders and Promoters - Return to homepage"
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-sm">
              Ruby Builders and Promoters, No.247/B, Velachery Main Road, Selaiyur, Chennai, Tamil Nadu 600073, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/aboutUs" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contactUs" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/specialOffers" className="text-foreground hover:text-primary transition-colors">
              Special Offers
            </Link>
            <Link href="/groupCompany" className="text-foreground hover:text-primary transition-colors">
              Group of Company
            </Link>
          </div>

          {/* More Links */}
          <div className="flex flex-col space-y-3">
            <Link href="/news" className="text-foreground hover:text-primary transition-colors">
              News
            </Link>
            <Link href="/events" className="text-foreground hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/csr" className="text-foreground hover:text-primary transition-colors">
              CSR
            </Link>
            <Link href="/careers" className="text-foreground hover:text-primary transition-colors">
              Careers
            </Link>
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
              <div className="text-sm">
                +91 9042 666 555<br />+91 44 6009 6009
              </div>
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
              <span className="text-sm">enquiry@rubybuilderschennai.com</span>
            </div>
            <div className="flex space-x-3 mt-2">
              <a
                href="https://www.instagram.com/rubybuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="https://ext.same-assets.com/165153690/1190302716.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.facebook.com/RubyBuildersandPromoters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="https://ext.same-assets.com/165153690/1864465667.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ruby-builders/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="https://ext.same-assets.com/165153690/2956798927.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://x.com/Ruby_Builders"
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
              <a
                href="https://www.youtube.com/channel/UC8qn-Ty1c16TNxqSnUo0nUA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="https://ext.same-assets.com/165153690/2821538621.svg"
                  alt="YouTube"
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
              © Ruby Builders - Designed and Developed by{' '}
              <a
                href="https://knowbintech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Knowbin Technologies
              </a>
              . All rights reserved.{' '}
              <Link href="/termsAndCondition" className="hover:text-primary">
                Terms & Conditions
              </Link>{' '}
              -{' '}
              <Link href="/privacyPolicy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="tel:+919042666555"
                className="bg-primary rounded-full p-2 text-white"
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+919042666555&text=Hi,%20I'm%20interested%20in%20Ruby%20Builders%20Project.%20Please%20get%20in%20touch%20with%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 rounded-full p-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
