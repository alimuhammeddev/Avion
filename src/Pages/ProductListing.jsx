import React from 'react'
import Navbar from '../Navbar'
import Hero3 from '../components/ProductListing/Hero3'
import Footer from '../Footer'

const ProductListing = () => {
  return (
    <>
        <div className='overflow-x-hidden'>
          <Navbar />
        </div>
        <Hero3 />
        <Footer />
    </>
  )
}

export default ProductListing