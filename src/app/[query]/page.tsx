import React from 'react'
import fetchPhotos from '../../../services/default'
import PhotoContainer from '../components/PhotoContainer'
import NotFound from '../components/NotFound'
async function page(
    {params}:any
) {
    console.log(params)
const {query} = params
const link = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=${query}&api_key=`
const response = await fetchPhotos(link)
if (response.length === 0) return <NotFound/>
  return (
    <PhotoContainer photos={response}/>
  )
}

export default page