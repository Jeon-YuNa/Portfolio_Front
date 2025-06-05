"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClassHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/projects") {
      document.body.classList.add("project-page");
    } else {
      document.body.classList.remove("project-page");
    }

    return () => {
      document.body.classList.remove("project-page");
    };
  }, [pathname]);

  return null;
}
