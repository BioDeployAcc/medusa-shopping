"use client";
import classes from "./LandingPageContent.module.scss";
import Filter from "../filter";
import { defaultQuery, ProductQueryType } from "../filter/Filter";
import ProductCard from "../productCard";
import Pagination from "../pagination";
import { Product } from "@medusajs/medusa";

export interface LandingPageContentProps {
  query?: ProductQueryType;
  products?: Product[];
  totalProducts?: number;
}

export const LandingPageContent = ({
  query = defaultQuery,
  products,
  totalProducts = 0,
}: LandingPageContentProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <Filter defaultValues={query} />
      </div>
      <div className={classes.productsSection}>
        <div className={classes.productsRow}>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              price={product.variants[0]?.prices[0]?.amount / 100}
              thumbnail={product.thumbnail || "/images/placeholder.png"}
              id={product.id}
              handle={product.handle || "product"}
              collection={product.collection}
            />
          ))}
        </div>
        <div className={classes.pagination}>
          <Pagination query={query} totalProducts={totalProducts} />
        </div>
      </div>
    </div>
  );
};
