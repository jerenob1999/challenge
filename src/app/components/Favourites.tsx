"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


function Favourites({parameters}:{parameters:string}) {

  const [query,setQuery] = useLocalStorage("query", [])




  const handleClick = () => {
    if (!query.includes(parameters)) {
        const updatedItems = [...query, parameters];
        setQuery(updatedItems);
      }
  }


  const handleGet = () => {
    const storedItem = localStorage.getItem("items");
    console.log(query)
  }

  const handleRemove = (param: string) => {
    const updatedItems = query.filter((item) => item !== param);
    setQuery(updatedItems);
  }


  return <>

<button  onClick={handleClick}> add Favourite </button>
<button onClick={handleGet} > get Favourite </button>
<ul>
        {query.map(item => (
          <li key={item}>
            {item} <button onClick={() => handleRemove(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
  </> 
}

export default Favourites;
