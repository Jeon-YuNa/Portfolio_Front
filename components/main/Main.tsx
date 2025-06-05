"use client";
import "../../css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainTitle from "./subcomponents/MainTitle";
import Navigation from "./subcomponents/Navigation";
import MainObjectText from "./subcomponents/MainObjectText";
import MainObject from "./subcomponents/MainObject";

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <main>
      <div className="wrap flex justify-between h-[70%]">
        <article className="flex flex-col justify-between">
          <MainTitle />
          <Navigation />
        </article>
        <article
          className="flex flex-col justify-end pb-20"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div>
            <MainObjectText />
            <MainObject />
          </div>
        </article>
      </div>
    </main>
  );
};
export default MainPage;
