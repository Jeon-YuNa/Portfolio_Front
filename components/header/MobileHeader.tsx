"use client";
import TextBox from "../main/subcomponents/TextBox";
import Clock from "./subcomponents/Clock";
import "../../css/header.css";
const MobileHeader = () => {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="1200">
      <Clock />
      <div className="flex justify-between items-start">
        <a href="/">
          <h1 className="w-36 h-24"></h1>
        </a>
        <nav className="flex gap-10 justify-end">
          <a href="/projects">
            <TextBox text="Project" />
          </a>
          <a href="/skill">
            <TextBox text="skill" />
          </a>
          <a href="/visitors">
            <TextBox text="visitor note" />
          </a>
        </nav>
      </div>
    </header>
  );
};
export default MobileHeader;
