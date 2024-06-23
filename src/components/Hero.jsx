import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { smallHeroVideo, heroVideo } from "../utils";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-title", {
      delay: 1.5,
      opacity: 1,
    });
    gsap.to("#cta", {
      delay: 1.5,
      opacity: 1,
      y: -50,
    });
  });
  const [videoSize, setVideoSize] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  return (
    <section className="w-full relative nav-height ">
      <div className="flex-center h-5/6 flex-col ">
        <p id="hero-title" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:10/12">
          <video autoPlay muted>
            <source src={videoSize} alt="/" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a className="btn" href="#HighLights">
          Buy now
        </a>
        <p>From $199/Month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
