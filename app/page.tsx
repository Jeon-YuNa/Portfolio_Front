"use client";
import FadeInWrapper from "@/components/FadeInWrapper";
import MainPage from "@/components/main/Main";
import { useIsMobile } from "@/hooks/useMobile";
import { postTodayVisitor } from "@/utils/api";
import { useEffect } from "react";

export default function Home() {
  const isMobile = useIsMobile();
  useEffect(() => {
    postTodayVisitor();
  }, []);
  return (
    <div id="container">
      <FadeInWrapper>
        <MainPage />
      </FadeInWrapper>
    </div>
  );
}
1;
