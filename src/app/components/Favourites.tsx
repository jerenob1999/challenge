"use client";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";



function Favourites({ parameters }: { parameters: string }) {
  const [query, setQuery] = useLocalStorage<string[]>("query", []);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = (param: string) => {
    const updatedItems = query.filter((item) => item !== param);
    setQuery(updatedItems);
  };

  const handleAdd = () => {
    if (!query.includes(parameters)) {
      const updatedItems = [...query, parameters];
      setQuery(updatedItems);
    }
  };

  return (
    <div>
      <Button className=" text-white" onClick={handleClick}>
        {" "}
        <MenuIcon />{" "}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          disabled={parameters.includes("undefined") ? true : false}
          onClick={handleAdd}
        >
          add Parameters to Favourite
        </MenuItem>
        <ul>
          {query?.map((item) => (
            <ListItem key={item}>
              <ListItemText primary={item} />
              <Button onClick={() => handleRemove(item)}>X</Button>
            </ListItem>
          ))}
        </ul>
      </Menu>
    </div>
  );
}

export default Favourites;
