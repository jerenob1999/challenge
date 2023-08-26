import { PhotoManifest } from "../models/manifest"
export const getTotalPhotos = (photos: PhotoManifest[],sol:string) : number | undefined => {
    const value = parseInt(sol)
    const result = photos.find(photo => photo.sol === value)
    return result === undefined ? 0 : result?.total_photos
}