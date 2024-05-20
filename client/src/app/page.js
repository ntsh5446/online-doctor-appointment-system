import DoctorCard from '@/components/doctor card/DoctorCard'
import Footer from '@/components/footer/Footer'
import ImageCarousel from '@/components/image-carousel/ImageCarousel'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
      <NavBar/>
      </div>
       
       <div><ImageCarousel/></div>
      
      
       <div className='mt-10'><DoctorCard/></div>

       <Footer/>
    </div>
  
  )
}
 
export default page