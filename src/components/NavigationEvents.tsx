"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.done(); 
  }, [pathname]);

  useEffect(() => {
  NProgress.configure({ showSpinner: false, trickleSpeed: 100 });
}, []);


  return null;
}
