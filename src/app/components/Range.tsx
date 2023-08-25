"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

function Range() {
  const [filterValue, setFilterValue] = useState(0);// Valor inicial del filtro
  const router = useRouter();
  const params = useSearchParams();
  const camera = params.get("camera")
  const sol = params.get("sol")
  console.log(camera,sol)

  const handleFilterChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setFilterValue(newValue);
  };

  useEffect(() => {
    router.push(`/filters?sol=${filterValue}?=camera`);
  }, [filterValue, router]);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1000"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <p>Sol: {filterValue}</p>
    </div>
  );
}

export default Range;
