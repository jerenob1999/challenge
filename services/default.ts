import { Manifest } from "../models/manifest";
import { Photo } from "../models/photo";

export async function fetchPhotos(url: string): Promise<Photo[]> {
  const API_KEY = "mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja";
  const URL = url + API_KEY;

  try {
    const response = await fetch(URL);
    if (response.ok) {
      const photosData = await response.json();
      const photos: Photo[] = photosData.photos;
      return photos;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export async function fetchManifest(url: string): Promise<Manifest> {
  const API_KEY = "mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja";
  const URL = url + API_KEY;

  try {
    const response = await fetch(URL);
    if (response.ok) {
      const manifest = await response.json();
      return manifest;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
