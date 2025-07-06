import React from "react";
import Image from "next/image";

const services = [
  {
    id: "home-construction",
    title: "Home Construction",
    description:
      "We build individual homes tailored to your needs, whether it's a new house on your own land or a small extension. Our team ensures quality and transparency at every step.",
    features: [
      "Custom home construction at your address",
      "Small-scale renovations and extensions",
      "Assistance with local approvals",
      "Transparent pricing and timelines",
      "Personalized service from start to finish",
    ],
    image: "/natural-house.png",
  },
  {
    id: "renovation",
    title: "Renovation & Repairs",
    description:
      "Upgrade, repair, or modernize your existing home. We handle everything from minor repairs to full renovations, always with a focus on your comfort and budget.",
    features: [
      "Kitchen and bathroom remodeling",
      "Structural repairs",
      "Painting and finishing",
      "Waterproofing and maintenance",
      "Energy efficiency upgrades",
    ],
    image: "/modern-house.png",
  },
  {
    id: "address-consultancy",
    title: "Address-Based Consultancy",
    description:
      "Get expert advice for your specific property or address. We help you plan, budget, and navigate local regulations for your construction or renovation project.",
    features: [
      "Site visits and feasibility checks",
      "Budget planning",
      "Local regulation guidance",
      "Material and design suggestions",
      "Step-by-step project planning",
    ],
    image: "/compact-house.png",
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
              className={`grid grid-cols-1 ${
                index % 2 === 0
                  ? "md:grid-cols-[1fr_1.2fr]"
                  : 'md:grid-cols-[1.2fr_1fr] md:[grid-template-areas:_"content_image"]'
              } gap-8 md:gap-12 items-center`}
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
                className={`relative ${
                  index % 2 !== 0 ? "md:[grid-area:image]" : ""
                }`}
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
