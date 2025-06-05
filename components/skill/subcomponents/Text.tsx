"use client";

import { useScrambleText } from "@/hooks/useScrambleText";
import { useEffect } from "react";

const Text = ({ text }: { text: string }) => {
  const { displayText, startScramble } = useScrambleText(text);
  useEffect(() => {
    startScramble();
  }, [startScramble]);

  return (
    <span
      className="text font-bold text-2xl rounded-sm cursor-pointer"
      onMouseEnter={startScramble}
    >
      {displayText}
    </span>
  );
};

export default Text;
