import { useState } from "react";

import { CurrentPage, PageController, PaginationContainer } from "./styles";

interface PaginationProps {
  total: number;
  loadIssues: (page: number) => void;
}

function Pagination({ total, loadIssues }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.floor(total / 10);

  function handleChangePage(page: "previous" | "next") {
    setCurrentPage((state) => {
      if (page === "next") {
        loadIssues(state + 1);
        return state + 1;
      }

      loadIssues(state - 1);
      return state - 1;
    });
  }

  const isFirstItem = currentPage === 1;
  const isLastItem = currentPage === totalPages;

  return (
    <PaginationContainer>
      {!isFirstItem && (
        <PageController onClick={() => handleChangePage("previous")}>
          Voltar
        </PageController>
      )}

      <CurrentPage>{currentPage}</CurrentPage>

      {!isLastItem && totalPages > 1 && (
        <PageController onClick={() => handleChangePage("next")}>
          Próximo
        </PageController>
      )}
    </PaginationContainer>
  );
}

export { Pagination };
