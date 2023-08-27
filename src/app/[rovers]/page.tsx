import React from "react";
import {fetchPhotos,fetchManifest }from "../../../services/default";
import { Header, NotFound, PhotoContainer,Pagination } from "../components";

interface Props {
  rovers: string;
}

interface Props {
  sol: string;
  camera: string;
  page: string;
}
async function Rovers({
  params,
  searchParams,
}: {
  params: Props;
  searchParams: Props;
}) {
  const { rovers } = params;
  const { sol, camera, page } = searchParams;

  const response = await fetchPhotos(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rovers}/photos?camera=${camera}&sol=${sol}&page=${
      page === undefined ? 1 : page
    }&api_key=`
  );

  const manifest = await fetchManifest(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rovers}?api_key=`)

  const sol_max = manifest.photo_manifest.max_sol

  return (
    <div>

<div className='flex justify-center mt-8'>
    </div>
    <div className="flex">
    <div className="w-3/8 p-5">
    <Pagination rover={rovers} />
      <Header rover={rovers} sol={sol_max} />
    </div>
    <div className="w-5/8">
      {response.length === 0 ? <NotFound /> : <PhotoContainer photos={response} />}
    </div>
  
  </div>
    </div>
  );
}

export default Rovers;
