import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import classes from "./Filter.module.scss";
import { z } from "zod";
import Input from "../input";
import SelectInput from "../selectInput";
import { useCollections, useProductCategories } from "medusa-react";
import Link from "next/link";

export const filterSchema = z.object({
  q: z.string().optional(),
  collection_id: z.string().optional(),
  category_id: z.string().optional(),
  gte: z.number().optional(),
  lte: z.number().optional(),
  order: z.string().optional(),
  direction: z.string().optional(),
  limit: z.number().optional(),
}); //Check if zod validation is overkill here

export type ProductQueryType = z.infer<typeof filterSchema>;

export const defaultQuery: ProductQueryType = {
  q: "",
  collection_id: "",
  category_id: "",
  gte: 0,
  lte: 1000,
};

export interface FilterProps {
  defaultValues?: ProductQueryType;
}

export const Filter = ({ defaultValues = defaultQuery }) => {
  const form = useForm<ProductQueryType>({
    resolver: zodResolver(filterSchema),
    defaultValues,
  });

  const { product_categories } = useProductCategories();
  const { collections } = useCollections();

  return (
    <form className={classes.container}>
      <Input form={form} label="Search" attribute="q" />
      <Input form={form} label="Min Price" attribute="gte" isNumeric />
      <Input form={form} label="Max Price" attribute="lte" isNumeric />
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
      />
      <SelectInput
        form={form}
        label="Limit"
        attribute="limit"
        options={[
          { label: "12", value: "12" },
          { label: "24", value: "24" },
          { label: "48", value: "48" },
        ]}
      />
      <Link
        type="submit"
        className={classes.button}
        href={{
          pathname: "/search",
          query: {
            ...form.getValues(),
            order: `${form.watch("direction")}${form.watch("order")}`, //check is mapping ok here
          },
        }}
      >
        Search
      </Link>
    </form>
  );
};