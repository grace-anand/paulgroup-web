import React from "react";

const processes = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a detailed consultation to understand your needs, preferences, and vision. Our experts work closely with you to align our services with your specific requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Our team develops comprehensive plans and designs that reflect your vision while ensuring functionality, aesthetics, and compliance with regulations. We incorporate sustainable features and innovative solutions.",
  },
  {
    number: "03",
    title: "Approvals & Documentation",
    description:
      "We handle all necessary approvals, permits, and documentation required for your project, ensuring full compliance with local regulations and seamless execution of the project.",
  },
  {
    number: "04",
    title: "Construction & Development",
    description:
      "Our skilled professionals execute the project with precision, using high-quality materials and adhering to strict quality control measures. We maintain transparency and regular communication throughout.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "We conduct rigorous quality checks at every stage to ensure that all aspects of the project meet our high standards and your expectations. We prioritize durability, safety, and aesthetic appeal.",
  },
  {
    number: "06",
    title: "Handover & Support",
    description:
      "Upon completion, we provide a smooth handover process along with comprehensive documentation. Our relationship continues with after-sales support and guidance for maintenance and any future needs.",
  },
];

const ServiceProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process: <span className="text-primary">How We Work</span>
          </h2>
          <p className="text-lg text-gray-700">
            We follow a structured, client-focused approach to ensure excellence
            at every stage of your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Number background */}
              <div className="absolute -top-4 -right-4 text-8xl font-black opacity-5 text-primary">
                {process.number}
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">
                    {process.number}
                  </div>
                  <h3 className="text-xl font-bold">{process.title}</h3>
                </div>
                <p className="text-gray-700">{process.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Ready to start your project with us?
          </p>
          <div className="mt-4">
            <a
              href="/contactUs"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get in Touch Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
