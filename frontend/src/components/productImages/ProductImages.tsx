"use client";

import { useState } from "react";

import classes from "./ProductImages.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { useGetScreenSize } from "@/utils/hooks/useGetScreenSize";
import {
  calculateDesktopPercentage,
  calculateMobilePercentage,
} from "@/utils/static/calculateVw";

export interface ProductImagesProps {
  images: string[];
}

export const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  const { isMobile, screenSize } = useGetScreenSize();

  return (
    <div className={classes.container}>
      <Image
        src={main}
        alt="product image"
        className={classes.mainImage}
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
      <div className={classes.gallery}>
        {images.map((img, index) => (
          <div
            key={img} //Test if img as key is smart
            className={classes.image}
            onClick={() => setMain(img)}
          >
            <Image
              src={img}
              className={clsx(classes.image, img === main && classes.main)}
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
