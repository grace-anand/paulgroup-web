import React from "react";
import Image from "next/image";

const services = [
  {
    id: "residential",
    title: "Residential Projects",
    description:
      "From premium apartments to luxury villas, we create living spaces that combine comfort, style, and functionality. Our residential projects feature modern designs, quality materials, and sustainable practices to provide an exceptional living experience.",
    features: [
      "Premium apartments and flats",
      "Luxury villas and individual homes",
      "Integrated townships",
      "Affordable housing projects",
      "Senior living communities",
    ],
    image: "https://ext.same-assets.com/165153690/3786047082.webp",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    description:
      "Our commercial projects are designed to optimize business operations and create productive environments. We develop state-of-the-art office spaces, retail centers, and industrial facilities that meet the highest standards of quality and efficiency.",
    features: [
      "Office buildings and corporate parks",
      "Retail spaces and shopping centers",
      "Industrial and warehouse facilities",
      "Hospitality projects",
      "Mixed-use developments",
    ],
    image: "https://ext.same-assets.com/165153690/321382779.webp",
  },
  {
    id: "plotDevelopment",
    title: "Plot Development",
    description:
      "We offer premium plot development services in strategic locations across Chennai, Tirunelveli, and Chengalpattu. Our plots come with clear titles, proper documentation, and necessary approvals, making them ideal for both investment and construction purposes.",
    features: [
      "Gated community plots",
      "CMDA/DTCP approved layouts",
      "Premium location plots",
      "Investment-grade land parcels",
      "Farm plots and agricultural land",
    ],
    image: "https://ext.same-assets.com/165153690/844805949.webp",
  },
  {
    id: "consultancy",
    title: "Real Estate Consultancy",
    description:
      "Leverage our expertise in the real estate market with our comprehensive consultancy services. We provide valuable insights, market analysis, and guidance for investments, property management, and regulatory compliance to help you make informed decisions.",
    features: [
      "Investment advisory services",
      "Property valuation and assessment",
      "Legal and documentation assistance",
      "Property management solutions",
      "Regulatory compliance guidance",
    ],
    image: "https://ext.same-assets.com/165153690/3840016385.webp",
  },
];

const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 ${index % 2 === 0 ? "md:grid-cols-[1fr_1.2fr]" : 'md:grid-cols-[1.2fr_1fr] md:[grid-template-areas:_"content_image"]'} gap-8 md:gap-12 items-center`}
            >
              <div className={index % 2 !== 0 ? "md:[grid-area:content]" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">What we offer:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`relative ${index % 2 !== 0 ? "md:[grid-area:image]" : ""}`}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-primary opacity-10"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
