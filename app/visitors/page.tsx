"use client";
import Visitors from "@/components/visitor/Visitors";
import { VisitorsData } from "@/types/visitors";
import { getVisitors } from "@/utils/api";
import { useEffect, useState } from "react";

const VisitorsPage = () => {
  return <Visitors />;
};
export default VisitorsPage;
