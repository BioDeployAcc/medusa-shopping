import Image from "next/image";
import classes from "./page.module.css";
import { Suspense } from "react";
import { LandingPageContent } from "@/components/landingPageContent/landingPageContent";
import { ProductQueryType } from "@/components/filter/Filter";

export default function Home({
  searchParams,
}: {
  searchParams?: ProductQueryType;
}) {
  return (
    <main className={classes.main}>
      <div className={classes.landingImage}>
        <Image src="/images/landing.jpg" alt="Landing Image" layout="fill" />
        <span className={classes.title}>Shop</span>
        <div className={classes.backdrop}></div>
      </div>
      <div className={classes.content}>
        <Suspense fallback={<div>Loading...</div>}>
          //Test if spinner is needed
          <LandingPageContent query={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
