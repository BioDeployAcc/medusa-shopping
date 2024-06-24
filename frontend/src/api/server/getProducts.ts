import { ProductQueryType } from "@/components/filter/Filter";
import { storeBaseUrl } from "./base";
import queryString from "query-string";

export async function getProducts(query: ProductQueryType) {
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
