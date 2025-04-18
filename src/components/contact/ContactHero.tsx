import React from "react";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 z-0 opacity-10">
        <Image
          src="https://ext.same-assets.com/165153690/651514672.svg"
          alt="Pattern"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 opacity-10">
        <Image
          src="https://ext.same-assets.com/165153690/2162258520.svg"
          alt="Pattern"
          width={300}
          height={300}
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We're here to assist you with your real estate and construction
            needs. Reach out to us for inquiries, assistance, or to schedule a
            consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918129469683"
              className="px-6 py-2 bg-primary text-white rounded-full transition hover:bg-opacity-90 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 8129469683
            </a>
            <a
              href="mailto:freddypaulvkp@gmail.com"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full transition hover:bg-gray-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+918129469683&text=Hi,%20I'm%20interested%20in%Paul%20Builders%20Project.%20Please%20get%20in%20touch%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 text-white rounded-full transition hover:bg-green-600 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.04 24h-.018c-2.044-.005-4.042-.566-5.782-1.621l-.402-.246-4.191 1.098 1.12-4.094-.271-.431a11.735 11.735 0 01-1.781-6.233c.006-6.476 5.27-11.73 11.743-11.73 3.136 0 6.078 1.222 8.292 3.432a11.642 11.642 0 013.453 8.3c-.009 6.479-5.276 11.749-11.755 11.749M23.646 5.352A13.965 13.965 0 0012.042 0 14.01 14.01 0 00.787 23.762l-5.044 18.445 18.896-4.959a13.95 13.95 0 006.7 1.699h.006c7.728 0 14.02-6.29 14.029-14.019a13.973 13.973 0 00-4.728-10.576" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
