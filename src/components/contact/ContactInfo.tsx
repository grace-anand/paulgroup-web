import React from "react";
import SocialMediaLinks from "../shared/SocialMediaLinks";

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm h-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Contact Information
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Address
          </h3>
          <p className="text-gray-700 ml-7">
            PS Bhavan 1,
            <br />
            Appattuvila, Venkulam,
            <br />
            Trivandrum, Kerala,
            <br />
            695506
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Phone
          </h3>
          <div className="ml-7">
            <p className="text-gray-700 font-semibold">
              Primary: +91 73565 69683
            </p>
            <p className="text-gray-700">Secondary: +91 81294 69683</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </h3>
          <p className="text-gray-700 ml-7">
            <a
              href="mailto:freddypaulvkp@gmail.com"
              className="hover:text-primary"
            >
              freddypaulvkp@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Business Hours
          </h3>
          <div className="ml-7">
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            Connect With Us
          </h3>
          <div className="ml-7">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
