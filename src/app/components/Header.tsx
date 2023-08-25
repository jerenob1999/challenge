import React from "react";
import Link from "next/link";
import { CAMERAS } from "../../../services/cameras";

function Header({ searchParams,params }: any) {
  console.log(searchParams,params)
  return (
    <header className="bg-gray-400 min-h-full">
      <Link href={"/"} className="flex text-white font-bold py-4 text-xl">
        HOME
      </Link>
      <nav className="flex justify-center items-center p-3 mt-11">
        {CAMERAS.map((cam) => (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            key={cam}
            href={`/filters?camera=${cam}`}
          >
            {cam}{" "}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
