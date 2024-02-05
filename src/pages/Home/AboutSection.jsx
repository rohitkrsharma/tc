import React from "react";

const AboutSection = () => {
  return (
    
    <section className="bg-[#000022] py-8 lg:py-12 lg:pt-24 px-4 lg:px-20 relative"> 
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl text-gray-100 font-bold mb-4 lg:mb-6">
              Extending a Helping Hand: Transforming Care with Innovation
            </h2>
            <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-4 lg:mb-6 reveal-text">
              At Take Care, we're more than just a service provider, we're your helping hand in the journey towards better health. With our innovative approach, we merge compassion and technology to deliver unparalleled care and support. Experience the difference with Take Care and let us guide you to a healthier, happier life.
            </p>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-2 lg:p-4">
                <div className="flex gap-2 lg:flex-col mb-2 lg:mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    fill="#ba9842"
                    stroke="#ba9842"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-settings"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15c.3-.8.5-1.7.5-2.5s-.2-1.7-.5-2.5M4.6 9c-.3.8-.5 1.7-.5 2.5s.2 1.7.5 2.5" />
                    <path d="M11.8 21.2c.8.3 1.7.5 2.5.5s1.7-.2 2.5-.5M5.2 2.8c-.8-.3-1.7-.5-2.5-.5s-1.7.2-2.5.5" />
                    <path d="M1 12h21M12 1v21" />
                  </svg>
                  <h3 className="text-base text-[#ba9842] lg:text-lg font-semibold">
                    Expertise
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm lg:text-base text-gray-100 leading-relaxed reveal-text">
                    Expertise is our cornerstone at Take Care, with seasoned professionals in medical and technology fields. Trust us for top-notch healthcare solutions.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 p-2 lg:p-4">
                <div className="flex gap-2 lg:flex-col mb-2 lg:mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="h-6 w-6 lg:h-6 lg:w-6 rounded-md"
                  >
                    <path
                      fill="#ba9842"
                      d="M10 1L1 5v10l9 4 9-4V5L10 1zm9 7.1l-9 4-9-4V6l9 4 9-4v2.1z"
                    />
                  </svg>
                  <h3 className="text-base text-[#ba9842] lg:text-lg font-semibold">
                    Creativity
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm lg:text-base text-gray-100 leading-relaxed reveal-text">
                    At Take Care, creativity drives our approach, delivering personalized healthcare solutions beyond expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block lg:w-1/2">
            <img
              src="/images/taking-care.jpg"
              alt="About Image"
              className="w-full h-auto lg:h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
