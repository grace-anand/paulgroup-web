import React from "react";
import Image from "next/image";

const Vision = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary rounded-full opacity-20"></div>
              <Image
                src="https://ext.same-assets.com/165153690/321382779.webp"
                alt="Building"
                width={500}
                height={350}
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2">
                Our Vision{" "}
                <span className="font-normal text-gray-600">
                  — What we aspire for!
                </span>
              </h2>
              <p className="text-gray-700 mt-4">
                To become a state-of-the-art infrastructure developer building
                affordable housing, integrated community townships, commercial
                buildings, highway infrastructure, and warehousing by finding
                synergies to execute trendsetting infrastructure projects in
                these diverse sectors. We shall not be the same as yesterday.
                Every day we innovate & grow, organically.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2">
                Our Mission{" "}
                <span className="font-normal text-gray-600">
                  — What we currently do!
                </span>
              </h2>
              <p className="text-gray-700 mt-4">
                To develop and deliver affordable housing and infrastructure for
                the future, with best in class quality and safety standards. On
                time every time.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-2">
                Our Philosophy{" "}
                <span className="font-normal text-gray-600">
                  — What we strive for!
                </span>
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>
                  We believe in delivering excellence through innovation,
                  quality, and commitment to our stakeholders.
                </li>
                <li>
                  Our success is built on transparency, integrity, and
                  sustainable practices that benefit communities.
                </li>
                <li>
                  We foster a culture of continuous learning and growth,
                  empowering our team to achieve extraordinary results.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
