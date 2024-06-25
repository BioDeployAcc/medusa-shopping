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
    <div className="container mx-auto">
      <div className="flex justify-center">
        <Filter defaultValues={query} />
      </div>
      <div className="flex flex-wrap justify-center">
        {products?.products?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.variants[0].prices[0].amount / 100}
            thumbnail={product.thumbnail || "/images/placeholder.png"}
            id={product.id}
            handle={product.handle || "product"}
            collection={product.collection}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination query={query} totalProducts={products?.count || 0} />
      </div>
    </div>
  );
};
