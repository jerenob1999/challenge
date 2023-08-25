import React from 'react'
import fetchPhotos from '../../../services/default';

interface Props {
  rovers: string;
}
async function Rovers({params}: {params:Props}) {
    const {rovers} = params

    const response = await fetchPhotos('')
    
  return (
    <div>Rovers</div>
  )
}

export default Rovers

