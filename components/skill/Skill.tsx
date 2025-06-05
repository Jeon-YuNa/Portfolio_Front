"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiAdobephotoshop, SiNestjs, SiNextdotjs } from "react-icons/si";
import Icons from "./subcomponents/Icons";
import Text from "./subcomponents/Text";
import { useEffect } from "react";
import "../../css/skill.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <section id="skill" className="flex pt-16">
      <article data-aos="fade-down">
        <h2 className="font-bold text-4xl pt-6 mb-6">Skill Stacks</h2>
        <div>
          <div className="box p-10">
            <Icons icon={<SiAdobephotoshop />} />
            <Icons icon={<FaHtml5 />} />
            <Icons icon={<FaCss3 />} />
            <Icons icon={<FaJsSquare />} />
            <Icons icon={<RiReactjsLine />} />
            <Icons icon={<BiLogoTypescript />} />
            <Icons icon={<SiNextdotjs />} />
            <Icons icon={<SiNestjs />} />
          </div>
        </div>
      </article>
      <article data-aos="fade-up">
        <h2 className="font-bold text-4xl pt-6 mb-6">Personal Skills</h2>
        <div className="text-wrap">
          <Text text="Planning and Design"></Text>
          <Text text="adaptability"></Text>
          <Text text="Trendy"></Text>
          <Text text="flexible"></Text>
          <Text text="Animation"></Text>
          <Text text="meticulousness"></Text>
          <Text text="Work Speed"></Text>
          <Text text="Frontend"></Text>
          <Text text="Communication"></Text>
        </div>
      </article>
    </section>
  );
};
export default Skill;
