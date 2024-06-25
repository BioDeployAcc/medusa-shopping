"use server";

import classes from "./page.module.scss";
import LandingPageContent from "@/components/landingPageContent";
import { ProductQueryType } from "@/components/filter/Filter";
import { getProducts } from "@/api/server/getProducts";

export default async function Home({
  searchParams,
}: {
  searchParams?: ProductQueryType;
}) {
  const products = await getProducts(searchParams ?? {});
  return (
    <main className={classes.main}>
      <div className={classes.landingImage}>
        <span className={classes.title}>Shop</span>
        <div className={classes.backdrop}></div>
      </div>
      <div className={classes.content}>
        <LandingPageContent
          products={products?.products}
          query={searchParams}
          totalProducts={products?.count}
        />
      </div>
    </main>
  );
}
