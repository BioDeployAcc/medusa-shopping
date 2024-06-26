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
    <div className="w-[100vw] flex flex-col md:flex-row items-center gap-y-[5vw] justify-center md:items-start md:justify-between">
      <Filter defaultValues={query} />
      <div className="flex flex-col w-full md:min-w-[66vw] justify-center">
        <div className="flex flex-wrap justify-center w-full gap-[4vw] md:gap-[2vw] ">
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
        {products?.products?.length ? (
          <div className="flex justify-center">
            <Pagination query={query} totalProducts={products?.count || 0} />
          </div>
        ) : (
          <div className="flex justify-center">
            <h1 className="text-2xl text-gray-700">No products found</h1>
          </div>
        )}
      </div>
    </div>
  );
};
