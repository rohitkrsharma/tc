import React from "react";

const AboutSection = () => {
  return (

    <section className="bg-[#000022] py-8 lg:py-12 lg:pt-24 px-4 lg:px-20 relative">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl text-gray-100 font-bold mb-4 lg:mb-6">
              Treating with a Helping Hand: Transforming Care with Innovation
            </h2>
            <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-4 lg:mb-6 reveal-text">
              At Take Care, we're more than just a service provider, we're your helping hand in the journey towards better health. With our innovative approach, we merge compassion and technology to deliver unparalleled care and support. Experience the difference with Take Care and let us guide you to a healthier, happier life.
            </p>
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
