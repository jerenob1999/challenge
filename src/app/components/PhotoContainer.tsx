import React from "react";
import { Photo as picture } from "../../../models/photo";
import Photo from "./Photo";

interface Props {
  photos: picture[];
}

function PhotoContainer({ photos }: Props) {
  return (
    <div  data-testid="container" className="flex justify-center flex-wrap mt-14">
      {photos.map((p) => (
        <Photo
          key={p.id}
          date={p.earth_date}
          camera={p.camera.full_name}
          rover={p.rover.name}
          image={p.img_src}
        />
      ))}
    </div>
  );
}

export default PhotoContainer;
