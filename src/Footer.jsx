import React from 'react'
import { social } from './assets'

const Footer = () => {
  return (
    <>
        <div className='bg-[#2A254B] lg:mt-0 mt-20'>
            <div className='container'>
                <div className='grid lg:grid-cols-4 grid-cols-1'>
                    <div className='lg:mt-16 mt-8'>
                        <h1 className='text-[#ffffff] lg:text-2xl text-xl'>Menu</h1>
                        <div className='text-[#ffffff] space-y-3 mt-3'>
                            <p>New arrivals</p>
                            <p>Best sellers</p>
                            <p>Recently viewed</p>
                            <p>Popular this week</p>
                            <p>All products</p>
                        </div>
                    </div>
                    <div className='lg:mt-16 mt-8'>
                        <h1 className='text-[#ffffff] lg:text-2xl text-xl'>Categories</h1>
                        <div className='text-[#ffffff] space-y-3 mt-3'>
                            <p>Crockery</p>
                            <p>Furniture</p>
                            <p>Homeware</p>
                            <p>Plant pots</p>
                            <p>Chairs</p>
                            <p>Crockery</p>
                        </div>
                    </div>
                    <div className='lg:mt-16 mt-8'>
                        <h1 className='text-[#ffffff] lg:text-2xl text-xl'>Our company</h1>
                        <div className='text-[#ffffff] space-y-3 mt-3'>
                            <p>About us</p>
                            <p>Vacancies</p>
                            <p>Contact us</p>
                            <p>Privacy</p>
                            <p>Returns policy</p>
                        </div>
                    </div>
                    <div className='lg:mt-16 mt-8'>
                        <h1 className='text-[#ffffff] lg:text-2xl text-xl'>Join our mailing list</h1>
                        <div className="mx-auto mt-5 max-w-xl">
                            <form action="#!" className="sm:flex sm:gap-4">
                                <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full border-gray-200 bg-gray-500 p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#2A254B] placeholder:text-white"
                                />
                                </div>

                                <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 bg-[#ffffff] px-5 py-3 text-[#2A254B] sm:mt-0 sm:w-auto"
                                >
                                <span className="text-sm font-medium"> Sign Up </span>
                                </button>
                            </form>
                        </div>  
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className='border border-[#4E4D93]'></h1>
                </div>

                <div className='lg:flex lg:items-center lg:justify-between mt-5'>
                    <div>
                        <h1 className='text-[#ffffff] lg:text-start text-center'>Copyright 2022 Avion LTD</h1>
                    </div>
                    <div className='lg:block hidden'>
                        <img src={social} alt="" />
                    </div>
                </div> <br />
            </div>
        </div>
    </>
  )
}

export default Footer