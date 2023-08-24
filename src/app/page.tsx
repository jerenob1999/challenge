import fetchPhotos from "../../services/default";
import PhotoContainer from "./components/PhotoContainer";
import Link from "next/link";
import { CAMERAS } from "../../services/cameras";

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
      <div className='flex justify-center items-center mt-11'>
      {CAMERAS.map((cam) => (
        <Link className="bg-slate-400 p-2"
          key={cam}
          href={{
            pathname: `/${cam}`,
            search: cam,
          }}
        >
          {cam}{" "}
        </Link>
      ))}

      </div>
      <PhotoContainer photos={photos} />
    </main>
  );
}
