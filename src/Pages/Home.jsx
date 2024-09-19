import React from 'react'
import Navbar from '../Navbar'
import Hero from '../components/Home/Hero'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
      </div>
      <Hero/>
      <Footer />
    </>
  )
}

export default Home