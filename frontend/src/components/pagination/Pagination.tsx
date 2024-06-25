"use client";
import Link from "next/link";

import classes from "./Pagination.module.scss";
import clsx from "clsx";
import { useMemo } from "react";
import { ProductQueryType } from "../filter/Filter";

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
    [query.page, totalProducts, query.limit]
  );

  return (
    <div className={classes.pagination}>
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
          <div className={classes.page}>First</div>
        </Link>
      )}
      {pages.map((p) => (
        <Link key={p} href={`?page=${p}`}>
          <div
            className={clsx(classes.page, {
              [classes.active]: p === query.page,
            })}
            key={`page-${p}`}
          >
            {p}
          </div>
        </Link>
      ))}
      {query.page !== totalPages && (
        <Link href={`?page=${totalPages}`}>
          <div className={classes.page}>Last</div>
        </Link>
      )}
    </div>
  );
};
