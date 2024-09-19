import React from 'react'
import Navbar from '../Navbar'
import Hero4 from '../components/Collection/Hero4'
import Footer from '../Footer'

const Collection = () => {
  return (
    <>
        <div className='overflow-x-hidden'>
            <Navbar />
        </div>
        <Hero4 />
        <div className='mt-10'>
        <Footer />
        </div>
    </>
  )
}

export default Collection