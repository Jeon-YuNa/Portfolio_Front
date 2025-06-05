// hooks/useScrambleText.ts
import { useState, useRef, useEffect, useCallback } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function getRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

export function useScrambleText(originalText: string) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayText(originalText);
  }, [originalText]);

  const startScramble = useCallback(() => {
    let frame = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => {
        let newText = "";

        for (let i = 0; i < originalText.length; i++) {
          if (i < frame) {
            newText += originalText[i];
          } else {
            newText += getRandomChar();
          }
        }

        return newText;
      });

      frame++;

      if (frame > originalText.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;

        setDisplayText(originalText);
      }
    }, 40);
  }, [originalText]);

  return { displayText, startScramble };
}
