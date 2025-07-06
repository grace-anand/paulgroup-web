import React from "react";
import Image from "next/image";

const Achievements = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-secondary">Achievements</span>
          </h2>
          <p className="text-lg text-gray-700">
            In just five years, we've made a meaningful impact for our clients
            and community. Here are some numbers we're proud of:
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">
                1300+ Thousand+ sq.ft
              </p>
              <p className="text-gray-700 mt-2">Saleable Area</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">7+</p>
              <p className="text-gray-700 mt-2">Happy Homes</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">7+</p>
              <p className="text-gray-700 mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">3+</p>
              <p className="text-gray-700 mt-2">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
