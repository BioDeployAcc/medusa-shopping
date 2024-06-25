"use client";

import { useGetScreenSize } from "@/utils/hooks/useGetScreenSize";
import {
  calculateDesktopPercentage,
  calculateMobilePercentage,
} from "@/utils/static/calculatePercentage";
import logo from "@assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  const { isMobile, screenSize } = useGetScreenSize();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Company Logo"
          width={
            isMobile
              ? calculateMobilePercentage(32) * screenSize
              : calculateDesktopPercentage(32) * screenSize
          }
          height={
            isMobile
              ? calculateMobilePercentage(32) * screenSize
              : calculateDesktopPercentage(32) * screenSize
          }
        />
        <Link href="/" className="text-lg font-bold">
          Company Name
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
