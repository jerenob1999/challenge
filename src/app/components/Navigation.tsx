"use client";
import React from "react";
import { ROVERS } from "../../../services/rovers";
import Link from "next/link";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Favourites } from ".";
import { useSearchParams } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";

function Navigation() {
  const searchParams = useSearchParams();
  const existingQuery = Object.fromEntries(searchParams.entries());
  console.log(existingQuery)
  const paremeters = `sol:${existingQuery.sol}, camera:${existingQuery.camera}`;
  return (
    <AppBar data-testid="navigation" color='transparent' position="relative" className="bg-black">
      <Toolbar className="flex flex-row justify-between items-center">
        <div className="">
          <Link href={"/"} className="flex text-white font-bold py-4 text-xl">
            <HomeIcon />
          </Link>
        </div>
        <div>
          {ROVERS.map((rover) => (
            <Link data-testid="link"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              key={rover}
              href={{ pathname: `/${rover}`, query: {sol: '1000', camera: 'FHAZ' , page: '1' } }}
            >
              {rover}{" "}
            </Link>
          ))}
        </div>
        <div>
            <Favourites parameters={paremeters} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;



