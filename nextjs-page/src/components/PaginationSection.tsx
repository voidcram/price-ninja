"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function PaginationSection({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createPageURL = (page: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined}
            href={currentPage > 1 ? createPageURL(currentPage - 1) : undefined}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={createPageURL(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : undefined}
            href={
              currentPage < totalPages ? createPageURL(currentPage + 1) : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
