export interface Manifest {
  photo_manifest: RoverManifest;
}

interface RoverManifest {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  photos: PhotoManifest[];
}

export interface PhotoManifest {
  sol: number;
  earth_date: string;
  total_photos: number;
  cameras: string[];
}
