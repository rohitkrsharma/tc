import React from "react";

const MarketingSolution = () => {
  const columnsData = [
    {
      heading: "Personalized Medical Care, Anytime, Anywhere",
      paragraph:
        "Tailored medical services delivered to your home, offering personalized care that meets your unique needs and schedules.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="image"
          className="svg-inline--fa fa-image fa-w-18 h-6 rounded-md"
          role="img"
          viewBox="0 0 576 512"
        >
          <path
            fill="#ba9842"
            d="M288 224c52.9 0 96-43.1 96-96s-43.1-96-96-96s-96 43.1-96 96s43.1 96 96 96zm0 32c-88.4 0-160 71.6-160 160V464c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-48c0-88.4-71.6-160-160-160zm256-128H384c-26.5 0-48 21.5-48 48v208c0 6.7-5.3 12-12 12H252.7l-59.3 59.3c-6.2 6.2-16.4 6.2-22.6 0l-59.3-59.3H48c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h192c6.7 0 12 5.3 12 12s-5.3 12-12 12H48v208h124.1l59.3 59.3c12.5 12.5 32.8 12.5 45.3 0l59.3-59.3H544v-96c0-26.5-21.5-48-48-48zm-79.8 253.3l-59.3 59.3c-4.7 4.7-12.3 4.7-17 0l-59.3-59.3H64v-80h80l59.3 59.3c12.5 12.5 32.8 12.5 45.3 0l59.3-59.3H448v80h-80l-59.3-59.3c-12.5-12.5-32.8-12.5-45.3 0l-59.3 59.3H64v-80h80l59.3 59.3c12.5 12.5 32.8 12.5 45.3 0l59.3-59.3H448v80h-80l-59.3-59.3c-12.5-12.5-32.8-12.5-45.3 0l-59.3 59.3H64v-80h80l59.3 59.3c12.5 12.5 32.8 12.5 45.3 0l59.3-59.3H448v24c0 6.6 5.4 12 12 12h24v64h-24c-6.6 0-12 5.4-12 12v24H252.7l-59.3 59.3c-6.2 6.2-16.4 6.2-22.6 0l-59.3-59.3H48V96h80v24c0 6.6 5.4 12 12 12s12-5.4 12-12V84h256v24c0 6.6 5.4 12 12 12s12-5.4 12-12V84h80v24c0 6.6 5.4 12 12 12s12-5.4 12-12V84h48c26.5 0 48 21.5 48 48v208c0 6.7-5.3 12-12 12z"
          ></path>
        </svg>
      ),
    },
    {
      heading: "Expert Care, Wherever You Are",
      paragraph:
        "Access expert medical care from the comfort of your home, with our team of skilled professionals ready to assist you whenever and wherever you need.",
      icon: (
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
          class="feather feather-layers"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      heading: "Empowering Health and Wellness at Your Doorstep",
      paragraph:
        "Empowering individuals with accessible healthcare solutions, fostering wellness and peace of mind within the comfort of home.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#ba9842"
          stroke="#ba9842"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-trending-up"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-8 bg-[#000022] lg:py-12  px-4 lg:px-20 relative">
      <div className="container mx-auto ">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="block text-gray-100 relative z-20">
              Your Trusted Home Healthcare Partner
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row  justify-center relative z-10">
          {columnsData.map((column, index) => (
            <div key={index} className="lg:w-1/3 lg:p-4 relative z-20">
              <div className="flex lg:flex-col items-center mt-2 gap-4 lg:items-center lg:justify-center mb-4 ">
                <div className="flex items-center mb-2 lg:mb-4">
                  {column.icon}
                </div>
                <h3 className="text-lg text-[#ba9842] lg:text-xl lg:text-center font-semibold w-4/6">
                  {column.heading}
                </h3>
              </div>
              <p className="text-sm lg:text-center lg:text-base text-gray-100 leading-relaxed reveal-text">
                {column.paragraph}
              </p>
            </div>
          ))}
          {/* <div className="responsive-shape3"></div> */}
        </div>
      </div>
    </div>
  );
};

export default MarketingSolution;
