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

  const currentPage = useMemo(
    () => (query.offset && query.limit ? query.offset / query.limit + 1 : 1),
    [query.offset, query.limit]
  );

  const pages = useMemo(
    () => paginationCalculator(currentPage, totalPages),
    [query.offset, totalPages, query.limit]
  );

  return (
    <div className="flex justify-center items-center space-x-[1vw] md:space-x-[0.5vw]">
      {currentPage !== 1 && (
        <Link
          href={{
            query: {
              ...query,
              offset: 0,
              limit: query.limit ?? 10,
            },
            pathname: "/",
          }}
        >
          <div className="px-[1vw] text-[2vw] md:text-[1vw] py-[0.5vw] rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
            First
          </div>
        </Link>
      )}
      {pages.map((p) => (
        <Link
          key={p}
          href={{
            pathname: "/",
            query: {
              ...query,
              offset: (p - 1) * (query.limit ?? 10),
              limit: query.limit ?? 10,
            },
          }}
        >
          <div
            className={`px-[1vw] text-[2vw] md:text-[1vw] py-[0.5vw] rounded-md cursor-pointer ${
              p === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            key={`page-${p}`}
          >
            {p}
          </div>
        </Link>
      ))}
      {currentPage !== totalPages && (
        <Link
          href={{
            query: {
              ...query,
              offset: (totalPages - 1) * (query.limit ?? 10),
              limit: query.limit ?? 10,
            },
            pathname: "/",
          }}
        >
          <div className="px-[1vw] text-[2vw] md:text-[1vw] py-[0.5vw] rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
            Last
          </div>
        </Link>
      )}
    </div>
  );
};
