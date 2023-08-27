"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

function Paginationd({ rover }: { rover: string }) {
  const searchParams = useSearchParams();
  const existingQuery = Object.fromEntries(searchParams.entries());
  const router = useRouter();
  const handlePageNext = () => {
    const newPageNumber = parseInt(existingQuery.page) + 1;
    router.push(
      `/${rover}?sol=${existingQuery.sol}&camera=${existingQuery.camera}&page=${newPageNumber}`,
    );
  };

  console.log(existingQuery.page);

  const handlePagePrev = () => {
    const newPageNumber = parseInt(existingQuery.page) - 1;
    router.push(
      `/${rover}?sol=${existingQuery.sol}&camera=${existingQuery.camera}&page=${newPageNumber}`,
    );
  };

  return (
    <div>
      <button
        className={`${
          existingQuery.page === "1" ? "bg-gray-500" : "bg-blue-500"
        } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2`}
        onClick={handlePagePrev}
        disabled={existingQuery.page === "1" ? true : false}
      >
        {"Prev"}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        onClick={handlePageNext}
      >
        {"Next"}
      </button>
    </div>
  );
}

export default Paginationd;
