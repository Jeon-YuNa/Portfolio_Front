"use client";
import { getTodayVisitorCount } from "@/utils/api";
import { useEffect, useState } from "react";

const MainObjectText = () => {
  const [todayVisitorCount, setTodayVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await getTodayVisitorCount();
        setTodayVisitorCount(count);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCount();
  }, []);
  // console.log(todayVisitorCount);
  return (
    <p className="font-bold text-right w-[93%] text-sm">
      <span className="mr-16">Today&apos;s Visitor: {todayVisitorCount}</span>
      <span>Website Production period : 2 week</span>
    </p>
  );
};
export default MainObjectText;
