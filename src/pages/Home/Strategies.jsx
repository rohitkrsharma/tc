import React from "react";

const Strategies = () => {
  return (
    <section className="bg-[#000022] py-8 lg:py-12 px-4 lg:px-20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:space-x-12 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl text-gray-100 lg:text-4xl font-bold mb-4 lg:mb-6 w-4/5 relative  z-10">
              Tailored strategies and captivating designs for success
            </h2>
            <p className="text-base lg:text-lg text-gray-100 leading-relaxed mb-4 lg:mb-6 reveal-text relative z-10">
              At Digital Falak, we offer the advantage of tailored strategies
              and cutting- edge designs to propel your brand to new heights. Our
              team of experts combines creativity and technology to deliver
              seamless solutions that drive success in the digital era.
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
