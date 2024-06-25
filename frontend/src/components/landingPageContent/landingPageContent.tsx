import classes from "./landingPageContent.module.css";
import Filter from "../filter";
import { defaultQuery, ProductQueryType } from "../filter/Filter";
import ProductCard from "../productCard";
import Pagination from "../pagination";
import { getProducts } from "@/api/server/getProducts";

export interface LandingPageContentProps {
  query?: ProductQueryType;
}

export const LandingPageContent = async ({
  query = defaultQuery,
}: LandingPageContentProps) => {
  const products = await getProducts(query || {});

  return (
    <div className={classes.container}>
      <div className={classes.filter}>
        <Filter defaultValues={query} />
      </div>
      <div className={classes.productsSection}>
        <div className={classes.productsRow}>
          {products?.products.map((product) => (
            <ProductCard
              name={product.title}
              price={product.variants[0].prices[0].amount / 100}
              thumbnail={product.thumbnail || "/images/placeholder.png"}
              id={product.id}
              handle={product.handle || "product"}
              collection={product.collection}
            />
          ))}
        </div>
        <div className={classes.pagination}>
          <Pagination query={query} totalProducts={products?.count || 0} />
        </div>
      </div>
    </div>
  );
};
