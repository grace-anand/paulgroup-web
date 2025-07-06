import React from "react";

const ContactMap = () => {
  return (
    <section className="py-10">
      <div className="container-custom mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Our Location
        </h2>
        <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDqywo8wTIWVQbOpe_WJCRmf3X5pZaZzdM&q=PS+Bhavan+1,+Appattuvila,+Venkulam,+Trivandrum,+Kerala,+695506"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Paul Builders Kerala Location Map"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
