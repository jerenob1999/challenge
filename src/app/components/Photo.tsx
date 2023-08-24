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
    <Card className="p-4 m-5 border-b-red-900 border-2">
      <Image   width={400} alt={image}
     height={400}  src={image} />
      <CardContent className="flex m-4  items-center">
        <Typography gutterBottom variant="h5" className="p-2">
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
