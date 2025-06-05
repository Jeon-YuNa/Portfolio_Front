"use client";
import TextBox from "../main/subcomponents/TextBox";
import Clock from "./subcomponents/Clock";
import "../../css/header.css";
import Link from "next/link";
const MobileHeader = () => {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="1200">
      <Clock />
      <div className="flex justify-between items-start">
        <Link href="/">
          <h1 className="w-36 h-24"></h1>
        </Link>
        <nav className="flex gap-10 justify-end">
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
      </div>
    </header>
  );
};
export default MobileHeader;
