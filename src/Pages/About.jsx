import React from 'react'
import Navbar from '../Navbar'
import Hero2 from '../components/About/Hero2'
import Footer from "../Footer"

const About = () => {
  return (
    <>
        <div className='overflow-x-hidden'>
            <Navbar />
        </div>
        <Hero2 />
        <Footer />
    </>
  )
}

export default About