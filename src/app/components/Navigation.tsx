'use client'
import React from "react";
import { ROVERS } from "../../../services/rovers";
import Link from "next/link";
import { AppBar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { Favourites } from ".";
import { useSearchParams, useRouter } from "next/navigation";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';



function Navigation() {
    const searchParams = useSearchParams();
  const existingQuery = Object.fromEntries(searchParams.entries());
  const paremeters = `sol:${existingQuery.sol}, camera:${existingQuery.camera}`
  return (
    <AppBar position='relative' className='bg-black' >
        <Toolbar className="flex flex-row justify-between items-center">
    <div className="">
      <Link href={"/"} className="flex text-white font-bold py-4 text-xl">
        <HomeIcon/>
      </Link>
    </div>
    <div>
      {ROVERS.map((rover) => (
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          key={rover}
          href={`/${rover}`}
        >
          {rover}{" "}
        </Link>
      ))}
    </div>
    <div>
    <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
   
      <Favourites parameters={paremeters} />
          </IconButton>
    </div>
        </Toolbar>
  </AppBar>
  );
}

export default Navigation;
