import { fetchManifest, fetchPhotos } from "../../services/default";
import PhotoContainer from "./components/PhotoContainer";
import { Suspense } from "react";
import { getLatestPhoto } from "../../utils/getLatestPhotos";

export default async function Home() {
  const currentDate = new Date().getDate();
  const response = await fetchManifest(
    "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=",
  );
  const latestDate = getLatestPhoto(
    currentDate,
    response.photo_manifest.photos,
  );
  const oportunity = await fetchPhotos(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&earth_date=${latestDate}&api_key=`,
  );

  return (
    <main>
      <h2
        data-testid="heading"
        className="flex justify-center text-white text-2xl mt-5"
      >
        {" "}
        Latest photos from current day : {currentDate}{" "}
      </h2>
      <Suspense fallback={<h4>Loading</h4>}>
        <PhotoContainer photos={oportunity} />
      </Suspense>
    </main>
  );
}
