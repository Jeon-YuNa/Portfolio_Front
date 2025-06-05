"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const MainObject = () => {
  const blurTitleRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const lastMouseCoords = useRef({ x: 0, y: 0 }); // ✅ useEffect 밖으로 이동!

  useEffect(() => {
    const movePointer = (e: MouseEvent) => {
      if (blurTitleRef.current && pointerRef.current) {
        lastMouseCoords.current.x = e.clientX;
        lastMouseCoords.current.y = e.clientY;

        const pointerWidth = pointerRef.current.offsetWidth;
        const pointerHeight = pointerRef.current.offsetHeight;

        const mouseX =
          e.clientX - blurTitleRef.current.offsetLeft - pointerWidth / 1.5;
        const mouseY =
          e.clientY - blurTitleRef.current.offsetTop - pointerHeight * 1.2;

        gsap.to(pointerRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
        });
      }
    };

    const handleResize = () => {
      if (blurTitleRef.current && pointerRef.current) {
        const pointerWidth = pointerRef.current.offsetWidth;
        const pointerHeight = pointerRef.current.offsetHeight;

        const mouseX =
          lastMouseCoords.current.x -
          blurTitleRef.current.offsetLeft -
          pointerWidth / 1.5;
        const mouseY =
          lastMouseCoords.current.y -
          blurTitleRef.current.offsetTop -
          pointerHeight * 1.2;

        gsap.to(pointerRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    const currentBlurTitle = blurTitleRef.current;
    if (currentBlurTitle) {
      currentBlurTitle.addEventListener("mousemove", movePointer);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (currentBlurTitle) {
        currentBlurTitle.removeEventListener("mousemove", movePointer);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="title" ref={blurTitleRef}>
      <div className="blurText">
        <div className="blurBG"></div>
        <div className="pointer" ref={pointerRef} />
      </div>
    </div>
  );
};

export default MainObject;
