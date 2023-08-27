import { PhotoManifest } from "../models/manifest";
export function getLatestPhoto(currentDate : number, photos : PhotoManifest[] ) {

for (let i = photos.length - 1 ; i >= 0; i-- ) {

    if (photos[i].earth_date.slice(-2) !== currentDate.toString() ) {
        i--
    } else {
        return photos[i].earth_date
    }
}

}