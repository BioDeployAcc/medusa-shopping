import { ProductQueryType } from "@/components/filter/Filter";
import { StoreGetProductsParams } from "@medusajs/medusa";

export const FilterQueryToStoreQuery = (
  query: ProductQueryType
): StoreGetProductsParams => {
  return {
    limit: query.limit,
    q: query.q,
    collection_id: query.collection_id ? [query.collection_id] : [],
    category_id: query.category_id ? [query.category_id] : [],
    offset: query.offset,
    order: query.order ? `${query.direction}${query.order}` : undefined,
  };
};

export const StoreQueryToFilterQuery = (
  storeQuery: StoreGetProductsParams
): ProductQueryType => {
  return {
    limit: storeQuery.limit || 12,
    q: storeQuery.q || "",
    offset: storeQuery.offset || 0,
    collection_id: storeQuery.collection_id?.length
      ? storeQuery.collection_id[0]
      : "",
    category_id: storeQuery.category_id?.length
      ? storeQuery.category_id[0]
      : "",
    order: storeQuery.order?.slice(1) || "",
    direction: storeQuery.order?.slice(0, 1) || "",
  };
};
