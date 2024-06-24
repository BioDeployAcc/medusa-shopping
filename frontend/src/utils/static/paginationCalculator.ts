const paginationCalculator = (
  page: number,
  totalPages: number,
) => {
  let startPage = Math.max(page - 3, 1);
  let endPage = Math.min(page + 3, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
  return pages;
};
