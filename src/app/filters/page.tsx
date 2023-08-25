import React from "react";
import fetchPhotos from "../../../services/default";
import PhotoContainer from "../components/PhotoContainer";
import NotFound from "../components/NotFound";
async function page({ searchParams,params }: any) {
  let camera;
  let sol;
  if (params.query === 'camera') {
    camera = params.query
  }
  if (params.query === 'sol') {
    sol = params.query
  }

  const link = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=1&api_key=`;
  const response = await fetchPhotos(link);
  if (response.length === 0) return <NotFound />;
  return <PhotoContainer photos={response} />;
}

export default page;
