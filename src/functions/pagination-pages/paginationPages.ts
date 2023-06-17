export const paginationPages = (currentPage = 1, pageRoute = '/page') => {
  const prevPage =
    currentPage - 1 === 1 ? '/' : `${pageRoute}/${currentPage - 1}`;
  const nextPage = `${pageRoute}/${currentPage + 1}`;

  return {
    prevPage,
    nextPage
  };
};
