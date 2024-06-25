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
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Image
          src={main}
          alt="product image"
          className="w-full"
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
      <div className="flex justify-center mt-4">
        {images.map((img, index) => (
          <div
            key={img}
            className={clsx(
              "w-12 h-12 mx-2 rounded-full overflow-hidden",
              img === main && "border-2 border-blue-500"
            )}
            onClick={() => setMain(img)}
          >
            <Image
              src={img}
              className={clsx(
                "w-full h-full object-cover",
                img === main && "opacity-75"
              )}
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
