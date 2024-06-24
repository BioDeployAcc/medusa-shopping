import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const filterSchema = z.object({
  q: z.string().optional(),
  collection_id: z.string().optional(),
  category_id: z.string().optional(),
  gte: z.number().optional(),
  lte: z.number().optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
});

export type QueryType = z.infer<typeof filterSchema>;

export const defaultQuery: QueryType = {
  q: "",
  collection_id: "",
  category_id: "",
  gte: 0,
  lte: 1000,
  page: 1,
  limit: 10,
};

export interface FilterProps {
  defaultValues?: QueryType;
}

export const Filter = ({ defaultValues = defaultQuery }) => {
  const form = useForm<QueryType>({
    resolver: zodResolver(filterSchema),
    defaultValues,
  });
};
