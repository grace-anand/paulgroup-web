import React from "react";
import Image from "next/image";

const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Leadership, <span className="font-normal">Our Strength</span>
          </h2>
          <p className="text-lg text-gray-700">
            Behind every successful project is a team of visionary leaders
            driving innovation and progress
          </p>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md w-full max-w-md">
            <div className="p-8">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src="https://ext.same-assets.com/165153690/2710587118.webp"
                  alt="Freddy Paul"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-center">
                Freddy Paul
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Founder & Director
              </p>
              <p className="text-gray-700 text-center">
                Freddy brings over 10 years of hands-on experience as a site
                engineer and director in the construction industry. His
                leadership is rooted in a deep understanding of on-site
                challenges, quality control, and client needs. Freddy is
                dedicated to delivering every project with transparency,
                technical excellence, and a personal touch, ensuring each home
                is built to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
