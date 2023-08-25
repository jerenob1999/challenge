import fetchPhotos from "../../services/default";
import PhotoContainer from "./components/PhotoContainer";

export default async function Home() {
  const oportunity = await fetchPhotos(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key="
  );

  const curiosity = await fetchPhotos(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key="
  );

  const photos = curiosity.concat(oportunity);
  return (
    <main>
      <PhotoContainer photos={photos} />
    </main>
  );
}
