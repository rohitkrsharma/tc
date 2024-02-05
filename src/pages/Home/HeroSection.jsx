import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const customLineStyle = {
    width: "3px",
    height: "30px",
    backgroundColor: "#ba9842",
    display: "inline-block",
    margin: "0 3px",
  };

  const handleContactClick = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const adjustedInnerHeight = window.innerHeight - 150;
      if (scrollPosition > adjustedInnerHeight) {
        setShowLogo(false);
        setShowScrollToTop(true);
      } else {
        setShowLogo(true);
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col lg:flex-row items-center justify-center"
      style={{
        backgroundImage: `url('/images/tc.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {showLogo && (
        <div className="fixed lg:fixed top-6 left-6 lg:top-16 lg:left-16 z-50 flex flex-col  items-center">
          <div className="text-white text-4xl lg:text-5xl font-semibold font-serif">
            T <span style={customLineStyle} /> C
          </div>
          <div
            className="text-white text-lg lg:text-2xl font-serif"
            style={{ color: "#ba9842" }}
          >
            Take Care
          </div>
          <div className="fixed right-6 top-10 lg:fixed lg:top-16 lg:right-10 z-50 ">
            <button
              onClick={handleContactClick}
              className="bg-[#ba9842] text-black rounded font-bold hover:bg-gray-300 transition duration-300 ease-in-out text-sm lg:text-base py-1 lg:py-2 px-2 lg:px-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
      {/* <div className="absolute inset-0 bg-blue-900" /> */}
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative  z-10 text-white text-center px-4 lg:px-0 ">
        <div className="lg:w-[700px] w-[350px]  flex flex-col ">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:leading-tight">
              Empower Your Health Journey with Take Care
              <br className="hidden lg:inline" />
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 w-auto ">
              At Take Care, we blend compassion and expertise to provide exceptional medical services right at your doorstep. Our mission is to ensure your well-being with personalized care and innovative solutions. Let us accompany you on your path to wellness in the comfort of your home.
            </p>
          </div>
        </div>
      </div>
      {/* <div class="custom-shape-divider-bottom-1700854857">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#000022"
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}
      {showScrollToTop && (
        <div
          className="fixed bottom-16 hidden lg:inline lg:right-6 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white transform rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 00-1 1v11.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L11 15.586V4a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

