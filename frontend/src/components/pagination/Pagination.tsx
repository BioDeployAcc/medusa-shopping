"use client";
import Link from "next/link";

import { useMemo } from "react";
import { ProductQueryType } from "../filter/Filter";
import { paginationCalculator } from "@utils/static/paginationCalculator";

export interface PaginationProps {
  totalProducts: number;
  query: ProductQueryType;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  query,
}) => {
  const totalPages = useMemo(
    () => Math.ceil(totalProducts / (query.limit ?? 10)),
    [totalProducts, query.limit]
  );

  const pages = useMemo(
    () => paginationCalculator(query.page ?? 1, totalPages),
    [query.page, totalPages]
  );

  return (
    <div className="flex justify-center items-center space-x-2">
      {query.page !== 1 && (
        <Link
          href={{
            query: {
              ...query,
              page: 1,
            },
            pathname: "/", //Test if this is needed
          }}
        >
          <div className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
            First
          </div>
        </Link>
      )}
      {pages.map((p) => (
        <Link key={p} href={`?page=${p}`}>
          <div
            className={`px-2 py-1 rounded-md cursor-pointer ${
              p === query.page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            key={`page-${p}`}
          >
            {p}
          </div>
        </Link>
      ))}
      {query.page !== totalPages && (
        <Link href={`?page=${totalPages}`}>
          <div className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
            Last
          </div>
        </Link>
      )}
    </div>
  );
};
