import {fetchPhotos} from "../../services/default";
import PhotoContainer from "./components/PhotoContainer";
import { ROVERS } from "../../services/rovers";
import Link from "next/link";

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
        {ROVERS.map((rover) => (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            key={rover}
            href={`/${rover}`}
          >
            {rover}{" "}
          </Link>
        ))}
      <PhotoContainer photos={photos} />
    </main>
  );
}
