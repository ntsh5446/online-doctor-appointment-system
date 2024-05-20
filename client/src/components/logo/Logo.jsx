import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div  className='flex items-center justify-center'>
      <Image src="/brand-logo.png" width={150} height={150}  alt='Brand-Logo' priority/>
    </div>
  )
}

export default Logo