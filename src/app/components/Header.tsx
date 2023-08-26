"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { CAMERAS } from "../../../services/cameras";
import { useRouter } from "next/navigation";
import { Slider } from "@mui/material";
import { Pagination } from ".";

function Header({
  rover,
  sol,
  pages,
}: {
  rover: string;
  sol?: number;
  pages: number | undefined;
}) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState(1000);

  const [camera, setCamera] = useState("FHAZ");
  const handleFilterChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setFilterValue(newValue);
    router.push(`/${rover}?sol=${filterValue}&camera=${camera}`);
  };
  const handleButton = (event: any) => {
    setCamera(event.target.value);
    router.push(`/${rover}?sol=${filterValue}&camera=${camera}`);
  };

  useEffect(() => {
    router.push(`/${rover}?sol=${filterValue}&camera=${camera}`);
  }, [router, filterValue, camera, rover]);

  return (
    <header className="bg-gray-400 min-h-full">
      <Link href={"/"} className="flex text-white font-bold py-4 text-xl">
        HOME
      </Link>
      <nav className="flex justify-center items-center p-3 mt-11">
        {CAMERAS.map((cam) => (
          <button
            className={` ${
              camera === cam ? "bg-blue-900" : "bg-blue-500"
            }  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2`}
            value={cam}
            onClick={(event) => handleButton(event)}
            key={cam}
          >
            {cam}
          </button>
        ))}
      </nav>
      <div>
        <Slider
          min={0}
          max={sol}
          value={filterValue}
          defaultValue={1000}
          onChange={handleFilterChange}
        />
        {/* <input
          type="range"
          min="0"
          max={sol}
          value={filterValue}
          onChange={(e) =>  handleFilterChange(e.target.value)}
        /> */}
        <p>Sol: {filterValue}</p>
      </div>
      <Pagination rover={rover} pages={pages} />
    </header>
  );
}

export default Header;
