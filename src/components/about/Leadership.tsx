import React from 'react';
import Image from 'next/image';

const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Leadership, <span className="font-normal">Our Strength</span>
          </h2>
          <p className="text-lg text-gray-700">
            Behind every successful project is a team of visionary leaders driving innovation and progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Leader 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="p-8">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src="https://ext.same-assets.com/165153690/2710587118.webp"
                  alt="Dr. Ruby R. Manoharan"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Dr. Ruby R. Manoharan</h3>
              <p className="text-gray-600 mb-4">Chairman & Managing Director</p>
              <p className="text-gray-700">
                With over 25 years of experience in the real estate industry, Dr. Manoharan has led the company to new heights with his visionary leadership and commitment to excellence.
              </p>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="p-8">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src="https://ext.same-assets.com/165153690/2710587118.webp"
                  alt="Mr. Ashok Manor"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Mr. Ashok Manor</h3>
              <p className="text-gray-600 mb-4">Vice Chairman & Joint Managing Director</p>
              <p className="text-gray-700">
                Mr. Manor brings innovation and strategic thinking to every project, ensuring that Ruby Builders remains at the forefront of sustainable development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
