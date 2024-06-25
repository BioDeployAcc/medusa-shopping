import { ProductQueryType } from "@/components/filter/Filter";
import classes from "./page.module.scss";
import { Suspense } from "react";
import LandingPageContent from "@/components/landingPageContent";

export const experimental_ppr = true;

export default function Home({
  searchParams,
}: {
  searchParams?: ProductQueryType;
}) {
  return (
    <main className={classes.main}>
      <div className={classes.landingImage}>
        <span className={classes.title}>Shop</span>
        <div className={classes.backdrop}></div>
        <Suspense fallback={<div>Loading...</div>}>
          <LandingPageContent query={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

//PPR usage
