"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { CAMERAS } from "../../../services/cameras";
import { useRouter } from "next/navigation";
import { Pagination, Favourites } from ".";
import AppBar from '@mui/material/AppBar';

function Header({
  rover,
  sol,
}: {
  rover: string;
  sol?: number;
}) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState(1000);
  const [camera, setCamera] = useState("FHAZ");
  const [page,setPage] = useState("1");
  const handleFilterChange = (event: any) => {
    const newValue = parseInt(event.target.value);
    setFilterValue(newValue);
    router.push(`/${rover}?sol=${filterValue}&camera=${camera}&page=${page}`);
  };
  const handleButton = (event: any) => {
    setCamera(event.target.value);
    router.push(`/${rover}?sol=${filterValue}&camera=${camera}&page=${page}`);
  };

  useEffect(() => {
    router.push(`/${rover}?sol=${filterValue}&camera=${camera}&page=${page}`);
  }, [router, filterValue, camera, rover,page]);


  console.log(sol)
  const parameters = `sol ${filterValue}, camera ${camera}   `
  return (
    <header className="bg-gray-400 min-h-full">
      {/* <AppBar className="bg-blue-800">
        <div className="flex flex-row">
      <Link href={"/"} className="flex text-white font-bold py-4 text-xl">
        HOME
      </Link>
      <Favourites parameters={parameters} />

        </div>
      </AppBar> */}
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
        <input
          type="range"
          min="0"
          max={sol}
          value={filterValue}
          onChange={(e) =>  handleFilterChange(e)}
        />
        <p>Sol: {filterValue}</p>
      </div>
      <Pagination rover={rover}  />
     
    </header>
  );
}

export default Header;
