import { ProductQueryType } from "@/components/filter/Filter";
import { storeBaseUrl } from "./base";
import queryString from "query-string";
import { Product } from "@medusajs/medusa";
import { FIlterQueryToStoreQuery } from "@/utils/static/queryMapper";

export interface ProductSearchResult {
  products: Product[];
  count: number;
  offset: number;
  limit: number;
}

export async function getProducts(
  query: ProductQueryType
): Promise<ProductSearchResult | undefined> {
  const mappedQuery = FIlterQueryToStoreQuery(query);
  const parsedQuery = queryString.stringify(mappedQuery);
  const response = await fetch(`${storeBaseUrl}/products?${parsedQuery}`); //Check if parsed query is needed here
  const data = await response.json();
  return data;
  //Explanation for no try catch block: This function is used in ppr, which is a server side rendering function and any errors have to be handled by next.js itself: see https://nextjs.org/docs/messages/ppr-caught-error
}
