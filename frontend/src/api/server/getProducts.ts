import { ProductQueryType } from "@/components/filter/Filter";
import { storeBaseUrl } from "./base";
import queryString from "query-string";
import { Product } from "@medusajs/medusa";

export interface ProductSearchResult {
  products: Product[];
  count: number;
  offset: number;
  limit: number;
}

export async function getProducts(
  query: ProductQueryType
): Promise<ProductSearchResult | undefined> {
  try {
    const parsedQuery = queryString.stringify(query);
    const response = await fetch(
      `${storeBaseUrl}/products/store?${parsedQuery}`
    ); //Check if parsed query is needed here
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
