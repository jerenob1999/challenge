import React from "react";
import {fetchPhotos,fetchManifest }from "../../../services/default";
import { Header, NotFound, PhotoContainer,Pagination } from "../components";
import { getTotalPhotos } from "../../../utils/getTotalPhotos";

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
  const max_sol = response[0]?.rover.max_sol;
  const totalPhotos = getTotalPhotos(manifest.photo_manifest.photos,sol)

  if (response.length === 0) return <NotFound rover={rovers} />;
  return (
    <div>
      <Header rover={rovers} sol={max_sol} pages={totalPhotos} />
      <PhotoContainer photos={response} />;
    </div>
  );
}

export default Rovers;
