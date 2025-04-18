import React from 'react';

const ContactMap = () => {
  return (
    <section className="py-10">
      <div className="container-custom mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Location</h2>
        <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.718149836236!2d80.13870861482294!3d12.992289990845102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f11ad9fce9f%3A0xc41d06954b3c8826!2sRuby%20Builders%20and%20Promoters!5e0!3m2!1sen!2sin!4v1679644100000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ruby Builders Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
