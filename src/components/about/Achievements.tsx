import React from "react";
import Image from "next/image";

const Achievements = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Honors and <span className="text-secondary">Achievements</span>
          </h2>
          <p className="text-lg text-gray-700">
            Our commitment to quality and innovation, our awards showcase our
            pursuit of excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Award 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://ext.same-assets.com/165153690/2427925310.webp"
                  alt="Star Award - Social Protection State Award 2013"
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Star Award - Social Protection State Award 2013
              </h3>
            </div>
          </div>

          {/* Award 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://ext.same-assets.com/165153690/2427925310.webp"
                  alt="Vanigamani Business Monthly Magazine Presents - 2009"
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Vanigamani Business Monthly Magazine Presents - 2009
              </h3>
            </div>
          </div>

          {/* Award 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://ext.same-assets.com/165153690/2427925310.webp"
                  alt="Ekaya Bhargavarshakan - 2013 Award"
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Ekaya Bhargavarshakan - 2013 Award
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">
                5800+
              </p>
              <p className="text-gray-700 mt-2">Happy Homes</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">
                190+
              </p>
              <p className="text-gray-700 mt-2">Project Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">
                25+
              </p>
              <p className="text-gray-700 mt-2">Awards</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary">
                4.1M
              </p>
              <p className="text-gray-700 mt-2">sq.ft Saleable Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
