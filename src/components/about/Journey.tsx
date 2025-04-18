import React from "react";
import Image from "next/image";

const Journey = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey of{" "}
            <span className="text-secondary italic">Excellence</span>
          </h2>
          <p className="text-lg text-gray-700">
            Explore the milestones that showcase our growth, innovation, and
            commitment to excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mt-20 pb-10">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="relative z-10">
            {/* 1998 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    Founded with a vision to redefine infrastructure development
                    and deliver quality projects
                  </p>
                </div>
              </div>
              <div className="md:w-14 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <h3 className="text-2xl font-bold text-primary">1998</h3>
              </div>
            </div>

            {/* 2000 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 text-right order-3 md:order-1">
                <h3 className="text-2xl font-bold text-primary">2000</h3>
              </div>
              <div className="md:w-14 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    Completed our first affordable housing project, setting a
                    new standard in the industry
                  </p>
                </div>
              </div>
            </div>

            {/* 2003 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    Expanded into commercial infrastructure, launching
                    state-of-the-art office spaces
                  </p>
                </div>
              </div>
              <div className="md:w-14 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-3">
                <h3 className="text-2xl font-bold text-primary">2003</h3>
              </div>
            </div>

            {/* 2004 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 text-right order-3 md:order-1">
                <h3 className="text-2xl font-bold text-primary">2004</h3>
              </div>
              <div className="md:w-14 flex justify-center mb-4 md:mb-0 order-1 md:order-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    Successfully delivered our 50th project, earning recognition
                    for on-time delivery and quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
