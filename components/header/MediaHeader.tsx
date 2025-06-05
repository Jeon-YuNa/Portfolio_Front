"use client";
import { useIsMobile } from "@/hooks/useMobile";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
const MediaHeader = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader /> : <Header />;
};
export default MediaHeader;
