"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Photo({
  image,
  date,
  rover,
  camera,
}: {
  image: string;
  date: string;
  rover: string;
  camera: string;
}) {
  return (
    <Card  data-testid="photo" className="max-w-xs p-4 m-5  min-w-0	 border-2 border-x-zinc-900">
  
        <Image
          width={400}
          alt={image}
          height={400}
          className=" object-cover aspect-[4/3] object-center"
          src={image}
        />
    
      <CardContent className="flex m-4  items-center justify-items-end flex-col ">
        <Typography gutterBottom variant="h4" className="p-2">
          {rover}
        </Typography>
        <Typography gutterBottom variant="h5">
          {camera}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="p-2">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Photo;
