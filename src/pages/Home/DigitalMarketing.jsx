import React from "react";

const DigitalMarketing = () => {
  return (
    <section className="bg-[#000022] py-8 lg:py-12 px-4 lg:px-20 relative">
      <div className="z-10 relative container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-100 lg:mb-6 w-5/6">
              Empower and Inspire: We Rise by Lifting Others
            </h2>
            <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-4 lg:mb-6 reveal-text">
              At Take Care, we embrace compassion and support's transformative power. Through lending a hand and instilling hope, we ignite a ripple effect of positivity in our community. Each act of kindness embodies grace, guiding us towards healing and well-being. Together, we uplift one another, finding strength and purpose. Our commitment to care shapes a brighter tomorrow for all.
            </p>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-2 lg:p-4"></div>
              <div className="lg:w-1/2 p-2 lg:p-4"></div>
            </div>
          </div>
          <div className="lg:block lg:w-1/2">
            <img
              src="/images/charity.jpg"
              alt="About Image"
              className="w-full h-auto lg:h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* <div className="responsive-shape2"></div> */}
    </section>
  );
};

export default DigitalMarketing;
