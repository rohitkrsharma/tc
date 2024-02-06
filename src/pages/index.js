import { Inter } from "next/font/google";
import HeroSection from "./Home/HeroSection";
import AboutSection from "./Home/AboutSection";
import MarketingSolution from "./Home/MarketingSolution";
import Strategies from "./Home/Strategies";
import ProjectSuccess from "./Home/ProjectSuccess";
import DigitalMarketing from "./Home/DigitalMarketing";
import GetInTouch from "./Home/GetInTouch";
import Footer from "./Home/Footer";
import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("scroll", (event) => {
        let scrollPos = window.scrollY;
        // console.log(scrollPos);
        if (scrollPos === 0) {
          getAnimation();
        }
      });

      function getAnimation() {
        const allText = document.querySelectorAll(".reveal-text");
        // console.log(allText);
        allText.forEach((ele, i) => {
          ele.classList.add(`animate${i}`);
          let typeSplit = new SplitType(`.animate${i}`, {
            types: "lines, words, chars",
            tagName: "span",
          });
          gsap.from(`.animate${i} .line`, {
            y: "100%",
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            stagger: 0.3,

            scrollTrigger: {
              trigger: `.animate${i}`,
              start: "top bottom",
            },
          });
        });
      }

      getAnimation();
    }, 1000);

  }, []);

  return (
    <main className={`${inter.className}`}>
      <Script src="https://unpkg.com/split-type"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></Script>
      <Head>
        <title>Take Care : Empower Your Health Journey with Take Care.</title>
        <meta name="description" content="Welcome to Take Care, we blend compassion and expertise to provide exceptional medical services right at your doorstep." />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
      <MarketingSolution />
      <Strategies />
      <ProjectSuccess />
      <DigitalMarketing />
      <GetInTouch />
      <Footer />
    </main>
  );
}
