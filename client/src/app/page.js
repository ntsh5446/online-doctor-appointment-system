'use client'
import DoctorCard from '@/components/doctor card/DoctorCard'
import LabCard from '@/components/lab card/LabCard'
import Footer from '@/components/footer/Footer'
import ImageCarousel from '@/components/image-carousel/ImageCarousel'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'
import DiseaseCard from '@/components/disease card/DiseaseCard'
const page = () => {
  return (
    <div>
      <div>
      <NavBar/>
      </div>
       
       <div><ImageCarousel/></div>
      
      
       <div className='mt-10'><DoctorCard/></div>
       <div className='mt-10'> <LabCard/></div>
       <div
        className='mt-10'><DiseaseCard/>
        </div>

       <Footer/>
    </div>
  
  )
}
 
export default page