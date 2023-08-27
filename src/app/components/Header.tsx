"use client";
import React, {  useState } from "react";
import { CAMERAS } from "../../../services/cameras";
import { useRouter } from "next/navigation";

function Header({ rover, sol }: { rover: string; sol?: number }) {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState(1000);
  const [camera, setCamera] = useState("FHAZ");
  const [page] = useState("1");
  const handleFilterChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setFilterValue(newValue);
    router.push(`/${rover}?sol=${newValue}&camera=${camera}&page=${page}`);
  };
  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newCamera = event.currentTarget.value;
    setCamera(newCamera);
    router.push(`/${rover}?sol=${filterValue}&camera=${newCamera}&page=${page}`);
  };

  
  return (
    <header>
      <nav className="flex flex-col justify-center items-center p-3 mt-11">
        {CAMERAS.map((cam) => (
          <button
            className={` ${
              camera === cam ? "text-blue-700" : "text-gray-500"
            }  hover:text-black  py-2 px-4 rounded mx-2`}
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
          onChange={(e) => handleFilterChange(e)}
        />
        <p className="text-white">Sol: {filterValue}</p>
      </div>
    </header>
  );
}

export default Header;
