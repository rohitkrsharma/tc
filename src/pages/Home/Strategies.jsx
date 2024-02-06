import React from "react";

const Strategies = () => {
  return (
    <section className="bg-[#000022] py-8 lg:py-12 px-4 lg:px-20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:space-x-12 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl text-gray-100 lg:text-4xl font-bold mb-4 lg:mb-6 w-4/5 relative  z-10">
              Pathology Services: A Compassionate Approach to Diagnosis
            </h2>
            <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-4 lg:mb-6 reveal-text relative z-10">
              At Take Care, we specialize in providing comprehensive pathology services designed to offer clarity and support during your medical journey. Our team of skilled professionals employs advanced diagnostic techniques with a compassionate touch, ensuring accurate and insightful results. From specimen analysis to detailed reports, we are dedicated to guiding you through the intricacies of diagnosis with care and expertise. With Take Care, you can trust in our commitment to delivering reliable pathology solutions tailored to your unique healthcare needs.
            </p>
          </div>

          <div className="lg:block lg:w-1/2">
            <img
              width={"50%"}
              height={"200px"}
              src="/images/care.jpg"
              alt="About Image"
              className="w-full h-auto lg:h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
