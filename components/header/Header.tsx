"use client";
import Link from "next/link";
import TextBox from "../main/subcomponents/TextBox";
import Clock from "./subcomponents/Clock";
// import'../../../img/headerlogo.png'
// import "moment/locale/ko";
const Header = () => {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="1200">
      <div className="flex justify-between items-start">
        <Link href="/">
          <h1 className="w-[14vw] h-[4vw]"></h1>
        </Link>
        <Clock />
      </div>
      <nav className="flex gap-10 justify-center">
        <Link href="/projects">
          <TextBox text="Project" />
        </Link>
        <Link href="/skill">
          <TextBox text="skill" />
        </Link>
        <Link href="/visitors">
          <TextBox text="visitor note" />
        </Link>
      </nav>
    </header>
  );
};
export default Header;
