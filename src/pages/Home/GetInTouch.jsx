import React from "react";

const YellowSVGIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="#222"
      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
    />
  </svg>
);
const PhoneSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="#222"
      d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
    ></path>
  </svg>
);
const LocationSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="#222"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
    ></path>
  </svg>
);

const GetInTouch = () => {
  const contactInfo = [
    {
      icon: <YellowSVGIcon />,
      title: "Email",
      description: "Get in touch with us",
      link: "mailto:ranjansharma21810@gmail.com",
      linkText: "connect@gmail.com",
    },
    {
      icon: <PhoneSvg />,
      title: "Phone",
      description: "Call us for any inquiries",
      link: "tel:+919162352025",
      linkText: "+91 9162352025",
    },
    {
      icon: <LocationSvg />,
      title: "Location",
      description: "Visit our office",
      link: "https://www.google.com/maps/dir//F9WQ%2BCFM+Sharma+Medical,+konhwa+more,+841428/@26.4960806,84.3505671,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39930518f40e83bf:0x469e8992b9d04f27!2m2!1d84.3886758!2d26.4960805?entry=ttu",
      linkText: "Gopalganj, Bihar",
    },
  ];

  return (
    <section className="py-4 lg:py-6 px-4 lg:px-20 bg-[#ba9842ee]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-14 lg:space-y-0 space-y-8 items-center justify-center">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="lg:w-1/3 flex flex-col items-center gap-3 text-center lg:items-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-950">{item.description}</p>
              <a
                href={item.link}
                className="text-black-200 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
