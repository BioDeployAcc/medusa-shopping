"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../input";
import SelectInput from "../selectInput";
import { useCollections, useProductCategories } from "medusa-react";
import { StoreGetProductsParams } from "@medusajs/medusa";
import { useRouter } from "next/navigation";
import queryString from "query-string";

export type ProductQueryType = {
  q: string;
  collection_id: string;
  category_id: string;
  order?: string;
  direction?: string;
  limit: number;
};

export const defaultQuery: ProductQueryType = {
  q: "",
  collection_id: "",
  category_id: "",
  limit: 12,
};

export interface FilterProps {
  defaultValues?: ProductQueryType;
}

export const Filter = ({ defaultValues = defaultQuery }) => {
  const router = useRouter();
  const form = useForm<ProductQueryType>({
    defaultValues,
  });

  const onQuery = (values: ProductQueryType) => {
    const url = queryString.stringify(values);
    router.push(`/?${url}`, { scroll: true });
  };

  const { product_categories } = useProductCategories();
  const { collections } = useCollections();

  return (
    <div className="container mx-auto">
      <form
        className="max-w-md mx-auto p-4 bg-slate-100 h-auto rounded-lg"
        onSubmit={form.handleSubmit(onQuery)}
      >
        <Input
          form={form}
          label="Search"
          attribute="q"
          error={form.formState.errors.q?.message?.toString()}
        />
        <SelectInput
          form={form}
          label="Category"
          attribute="category_id"
          options={[
            {
              label: "All",
              value: "",
            },
            ...(product_categories?.map((c) => ({
              label: c.name,
              value: c.id,
            })) || []),
          ]}
        />
        <SelectInput
          form={form}
          label="Collection"
          error={form.formState.errors.collection_id?.message?.toString()}
          attribute="collection_id"
          options={[
            {
              label: "All",
              value: "",
            },
            ...(collections?.map((c) => ({
              label: c.title,
              value: c.id,
            })) || []),
          ]}
        />
        <SelectInput
          form={form}
          label="Order"
          attribute="order"
          error={form.formState.errors.order?.message?.toString()}
          options={[
            { label: "Name", value: "title" },
            { label: "Category", value: "category_id" },
            {
              label: "Collection",
              value: "collection_id",
            },
            { label: "Price", value: "variants.prices.amount" }, //See how to reference the price field
          ]}
        />
        <SelectInput
          form={form}
          label="Direction"
          attribute="direction"
          options={[
            { label: "Ascending", value: "" },
            { label: "Descending", value: "-" },
          ]}
          error={form.formState.errors.direction?.message?.toString()}
        />
        <SelectInput
          form={form}
          label="Limit"
          attribute="limit"
          isNumeric
          options={[
            { label: "12", value: "12" },
            { label: "24", value: "24" },
            { label: "48", value: "48" },
          ]}
          error={form.formState.errors.limit?.message?.toString()}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};
