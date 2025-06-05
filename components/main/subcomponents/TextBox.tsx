"use client";

const TextBox = ({ text }: { text: string }) => {
  return (
    <div className="textBox px-4 py-1 mb-4 flex items-center w-fit">
      <span className="dot w-1 h-1 bg-[#444] inline-block mr-2.5"></span>
      <span className=" font-[500] text-sm">{text}</span>
      <div className={`gauge w-[0%]`}></div>
    </div>
  );
};
export default TextBox;
