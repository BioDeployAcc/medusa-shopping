"use client";

import { useState } from "react";

import Image from "next/image";
import clsx from "clsx";
import { useGetScreenSize } from "@/utils/hooks/useGetScreenSize";
import {
  calculateDesktopPercentage,
  calculateMobilePercentage,
} from "@/utils/static/calculatePercentage";

export interface ProductImagesProps {
  images: string[];
}

export const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  const { isMobile, screenSize } = useGetScreenSize();

  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-x-[2vw] items-center">
      <div className="w-full">
        <Image
          src={main}
          className="object-cover"
          alt="product image"
          width={
            isMobile
              ? screenSize * calculateMobilePercentage(325)
              : screenSize * calculateDesktopPercentage(450)
          }
          height={
            isMobile
              ? screenSize * calculateMobilePercentage(350)
              : screenSize * calculateDesktopPercentage(500)
          }
        />
      </div>
      <div
        className="flex flex-row w-full gap-x-[4vw] md:flex-col 
                  md:h-full md:gap-y-[2vw] md:w-auto justify-center "
      >
        {images.map((img, index) => (
          <div
            key={img}
            className={clsx(
              "rounded-full overflow-hidden",
              img === main && "border-2 border-blue-500"
            )}
            onClick={() => setMain(img)}
          >
            <Image
              src={img}
              className={clsx("object-cover", img === main && "opacity-75")}
              alt={`product image ${index}`}
              width={
                isMobile
                  ? screenSize * calculateMobilePercentage(50)
                  : screenSize * calculateDesktopPercentage(75)
              }
              height={
                isMobile
                  ? screenSize * calculateMobilePercentage(50)
                  : screenSize * calculateDesktopPercentage(75)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
