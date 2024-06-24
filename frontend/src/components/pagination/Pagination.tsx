"use client";
import Link from "next/link";

import classes from "./Pagination.module.scss";
import clsx from "clsx";
import { useMemo } from "react";

export interface PaginationProps {
  page: number;
  totalProducts: number;
  limit: number;
  query?: object;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalProducts,
  limit,
  query,
}) => {
  const totalPages = useMemo(
    () => Math.ceil(totalProducts / limit),
    [totalProducts, limit]
  );

  const pages = useMemo(
    () => paginationCalculator(page, totalPages),
    [page, totalProducts, limit]
  );

  return (
    <div className={classes.pagination}>
      {page !== 1 && (
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
              [classes.active]: p === page,
            })}
            key={`page-${p}`}
          >
            {p}
          </div>
        </Link>
      ))}
      {page !== totalPages && (
        <Link href={`?page=${totalPages}`}>
          <div className={classes.page}>Last</div>
        </Link>
      )}
    </div>
  );
};
