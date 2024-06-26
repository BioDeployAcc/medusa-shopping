"use client";

import { useForm } from "react-hook-form";
import Input from "../input";
import SelectInput from "../selectInput";
import {
  useCollections,
  useProductCategories,
  useProducts,
} from "medusa-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import Button from "../button ";

export type ProductQueryType = {
  q?: string;
  collection_id?: string;
  category_id?: string;
  order?: string;
  direction?: string;
  limit?: number;
  offset?: number;
};

export const defaultQuery: ProductQueryType = {
  q: "",
  collection_id: "",
  category_id: "",
  limit: 12,
  offset: 0,
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
    <div className="container box-border w-full md:w-[25vw]">
      <form
        className="box-border  w-full md:mx-0 md:ml-[2vw] p-[2vw] md:p-[1vw] bg-slate-100 h-auto rounded-lg flex flex-col gap-y-[2vw] md:gap-y-[1vw]"
        onSubmit={form.handleSubmit(onQuery)}
      >
        <Input form={form} label="Search" attribute="q" />
        <SelectInput
          form={form}
          label="Category"
          attribute="category_id"
          options={[
            {
              label: "All",
              value: "",
            },
            ...((
              product_categories?.filter((c) => !c.handle.includes("hidden")) ||
              []
            ).map((c) => ({
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
            { label: "Category", value: "handle" },
            {
              label: "Collection",
              value: "collection_id",
            },
            { label: "Price", value: "variants.prices.amount" },
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
        />
        <Button>Filter</Button>
      </form>
    </div>
  );
};
