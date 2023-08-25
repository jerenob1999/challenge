"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CAMERAS } from "../../../services/cameras";
import { useRouter } from "next/navigation";

function Header({ searchParams, params }: any) {
  console.log(searchParams, params);
  const router = useRouter();
  const [filterValue, setFilterValue] = useState(0);
  const [camera, setCamera] = useState("FHAZ");
  const handleFilterChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setFilterValue(newValue);
  };
  const handleButton = (event: any) => {
    setCamera(event.target.value);
    router.push(`/filters?sol=${filterValue}&camera=${camera}`);
  };

  useEffect(() => {
    router.push(`/filters?sol=${filterValue}&camera=${camera}`);
  }, [filterValue, router, camera]);

  return (
    <header className="bg-gray-400 min-h-full">
      <Link href={"/"} className="flex text-white font-bold py-4 text-xl">
        HOME
      </Link>
      <nav className="flex justify-center items-center p-3 mt-11">
        {CAMERAS.map((cam) => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" value={cam} onClick={(event) => handleButton(event)} key={cam}>
            {cam}
          </button>
        ))}
      </nav>
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
    </header>
  );
}

export default Header;
