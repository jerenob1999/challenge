import React from 'react'
import Header from './Header'
function NotFound({rover} : {rover:string}) {
  return (
    <div >
     <Header rover={rover} />
   <h3 className='flex justify-center mt-10 font-medium  text-lg'>No photos found.</h3>  
     </div>
  )
}

export default NotFound