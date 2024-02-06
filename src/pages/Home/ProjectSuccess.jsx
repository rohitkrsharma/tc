import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ProjectSuccess = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClick = () => {
    setShowContactForm(true);
  };

  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ba9842"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 6 12 12 16 14 12 6" />
          <line x1="7" y1="7" x2="17" y2="17" />
        </svg>
      ),
      heading: "Initial Assessment",
      paragraph: "We commence by evaluating your specific health concerns and objectives.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="#ba9842"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5-2 4-2 4 2 4 2"></path>
          <line x1="12" y1="9" x2="12" y2="14"></line>
          <line x1="9" y1="12" x2="15" y2="12"></line>
        </svg>
      ),
      heading: "Diagnostic Testing",
      paragraph:
        "Our team conducts a variety of comprehensive tests, including blood tests, urine analysis, and tissue biopsies.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="#ba9842"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="14" x2="16" y2="14"></line>
          <line x1="8" y1="18" x2="16" y2="18"></line>
          <line x1="12" y1="14" x2="12" y2="20"></line>
        </svg>
      ),
      heading: "Analysis & Interpretation",
      paragraph:
        "We meticulously analyze test results, interpreting findings with precision and attention to detail.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ba9842"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.5h-7m-3 0H3m6 0V10m0 5v-3" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      heading: "Completion & Reporting",
      paragraph:
        "Upon completion, we deliver comprehensive reports, furnishing you with valuable insights to guide your healthcare decisions.",
    },
  ];

  return (
    <section className="py-8 lg:py-12 px-4 lg:px-20 bg-[#000022]">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-6 w-5/6">
              Efficient Pathology Procedures Ensuring Diagnostic Success
            </h2>
            {/* <button
              onClick={handleClick}
              className="bg-[#ba9842] hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Contact Us
            </button> */}
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 relative z-10">
            {data.map((item, index) => (
              <div key={index} className="flex gap-5 relative z-10 ">
                {item.icon}
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-lg font-semibold reveal-text text-[#ba9842]">{item.heading}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed reveal-text">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showContactForm && (
        <ContactForm setShowContactForm={setShowContactForm} />
      )}
    </section>
  );
};

export default ProjectSuccess;
