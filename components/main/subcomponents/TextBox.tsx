"use client";
import { useState } from "react";

const TextBox = ({ text }: { text: string }) => {
  const [percent, setPercent] = useState(0);
  const handleMouseOn = () => {
    setPercent(100);
  };
  const handleMouseOut = () => {
    setPercent(100);
  };
  return (
    <div className="textBox px-4 py-1 mb-4 flex items-center w-fit">
      <span className="dot w-1 h-1 bg-[#444] inline-block mr-2.5"></span>
      <span className=" font-[500] text-sm">{text}</span>
      <div className={`gauge w-[${percent}%]`}></div>
    </div>
  );
};
export default TextBox;
