"use client";
import FadeInWrapper from "@/components/FadeInWrapper";
import MainPage from "@/components/main/Main";
import { postTodayVisitor } from "@/utils/api";
import { useEffect } from "react";

export default function Home() {
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
