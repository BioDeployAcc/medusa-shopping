import { ProductQueryType } from "@/components/filter/Filter";
import { storeBaseUrl } from "./base";
import queryString from "query-string";
import { Product } from "@medusajs/medusa";
import { FilterQueryToStoreQuery } from "@/utils/static/queryMapper";
import { unstable_noStore } from "next/cache";

export interface ProductSearchResult {
  products: Product[];
  count: number;
  offset: number;
  limit: number;
}

export async function getProducts(
  query: ProductQueryType
): Promise<ProductSearchResult | undefined> {
  // This function is used in ppr, which is a server side rendering function and certain errors have to be handled by next.js itself: see https://nextjs.org/docs/messages/ppr-caught-error
  unstable_noStore();

  try {
    const mappedQuery = FilterQueryToStoreQuery(query);
    const parsedQuery = queryString
      .stringify(mappedQuery)
      .replace("category_id", "category_id%5B0%5D"); //Replace category_id with category_id[]
    const response = await fetch(`${storeBaseUrl}/products?${parsedQuery}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
