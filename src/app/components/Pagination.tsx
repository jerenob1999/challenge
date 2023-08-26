"use client";
import React,{useState} from "react";
import { useSearchParams,useRouter } from "next/navigation";
function Pagination({rover,pages}:{rover:string,pages:number | undefined }) {
  const searchParams = useSearchParams();
  const existingQuery = Object.fromEntries(searchParams.entries());
  const [currentPage,setCurrentPage] = useState(2)
  const router = useRouter();
  const handlePage = () => {
    setCurrentPage(currentPage + 1)
    console.log(currentPage) 
    router.push(`/${rover}?sol=${existingQuery.sol}&camera=${existingQuery.camera}&page=${currentPage}`)
  }

  const handlePagePrev = () => {
    setCurrentPage(currentPage - 1)
    router.push(`/${rover}?sol=${existingQuery.sol}&camera=${existingQuery.camera}&page=${currentPage}`)
  }


  return (
    <div>
      <button onClick={handlePagePrev}>{"<"}</button>
      <button onClick={handlePage} >{">"}</button>
    </div>
  );
}

export default Pagination;
