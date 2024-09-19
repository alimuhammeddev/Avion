import React from 'react'
import { chair, checkmark, delivery, lamp, pots, productimage, purchase, sprout, vase } from '../../assets'
import { Link } from 'react-router-dom'

const Hero3 = () => {
  return (
    <>
        <div className='container'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-24 gap-7 lg:mt-0 mt-7'>
                <div>
                    <img src={productimage} alt="" />
                </div>
                <div className='lg:mt-16 '>
                    <h1 className='text-[#2A254B] lg:text-3xl text-xl font-semibold'>The Dandy Chair</h1>
                    <p className='text-[#12131A] lg:text-xl mt-3'>£250</p>
                    <div>
                        <h1 className='text-[#2A254B] text-lg lg:mt-10 mt-3'>Description</h1>
                        <p className='text-[#505977] mt-3'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                        <div className='mt-3'>
                            <p className='text-[#505977]'>Premium material</p>
                            <p className='text-[#505977]'>Handmade upholstery</p>
                            <p className='text-[#505977]'>Quality timeless classic</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#2A254B] text-lg lg:mt-12 mt-6'>Dimensions</h1>
                        <div className='flex items-center gap-10 mt-5'>
                            <div>
                                <h1 className='text-[#2A254B]'>Height</h1>
                                <p className='text-[#505977]'>110cm</p>
                            </div>
                            <div>
                                <h1 className='text-[#2A254B]'>Width</h1>
                                <p className='text-[#505977]'>75cm</p>
                            </div>
                            <div>
                                <h1 className='text-[#2A254B]'>Depth</h1>
                                <p className='text-[#505977]'>50cm</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex lg:items-center lg:justify-between lg:flex-row flex-col mt-10'>
                        <div className='flex items-center gap-8'>
                            <h1 className='text-[#2A254B] lg:text-xl text-lg'>Amount:</h1>
                            <div className='bg-[#F9F9F9] flex items-center gap-8 w-fit p-2'>
                                <p className='text-[#CAC6DA]'>-</p>
                                <p className='text-[#2A254B]'>1</p>
                                <p className='text-[#CAC6DA]'>+</p>
                            </div>
                        </div>
                        <div className='lg:mt-0 mt-5'>
                            <Link to="/cart">
                                <button className='bg-[#2A254B] text-[#ffffff] p-3 lg:w-fit w-full'>Add to cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container lg:mt-20 mt-10'>
            <div>
                <h1 className='lg:text-3xl text-xl'>You might also like</h1>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 mt-5'>
                <div>
                    <img src={chair} alt="" />
                    <div className='mt-3'>
                        <h1>The Dandy Chair</h1>
                        <p>£250</p>
                    </div>
                </div>
                <div>
                    <img src={pots} alt="" />
                    <div className='mt-3'>
                        <h1>Rustic Vase Set</h1>
                        <p>£155</p>
                    </div>
                </div>
                <div>
                    <img src={vase} alt="" />
                    <div className='mt-3'>
                        <h1>The Silky Vase</h1>
                        <p>£125</p>
                    </div>
                </div>
                <div>
                    <img src={lamp} alt="" />
                    <div className='mt-3'>
                        <h1>The Lucy Lamp</h1>
                        <p>£399</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto justify-center flex mt-7'>
                <Link to="/collection">
                    <button className='bg-[#F9F9F9] p-3 lg:px-7'>View collection</button>
                </Link>
            </div>
        </div>

        <div className='container mt-16'>
            <h1 className='text-center lg:text-2xl text-xl'>What makes our brand different</h1>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 mt-10'>
                <div className='bg-[#F9F9F9] w-fit p-10'>
                    <img src={delivery} alt="" />
                    <h1 className='text-[#2A254B] text-xl mt-2'>Next day as standard</h1>
                    <p className='text-[#2A254B] mt-2'>Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className='bg-[#F9F9F9] w-fit p-10'>
                    <img src={checkmark} alt="" />
                    <h1 className='text-[#2A254B] text-xl mt-2'>Made by true artisans</h1>
                    <p className='text-[#2A254B] mt-2'>Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className='bg-[#F9F9F9] w-fit p-10'>
                    <img src={purchase} alt="" />
                    <h1 className='text-[#2A254B] text-xl mt-2'>Unbeatable prices</h1>
                    <p className='text-[#2A254B] mt-2'>For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className='bg-[#F9F9F9] w-fit p-10'>
                    <img src={sprout} alt="" />
                    <h1 className='text-[#2A254B] text-xl mt-2'>Recycled packaging</h1>
                    <p className='text-[#2A254B] mt-2'>We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
        </div>

        <div className='bg-[#F9F9F9] lg:p-20 lg:mt-24'>
            <div className='container bg-[#ffffff] lg:p-16'>
                <h1 className='text-center lg:text-3xl text-xl text-[#2A254B] lg:mt-0 mt-5'>Join the club and get the benefits</h1>
                <p className='text-center lg:text-xl lg:mt-5 mt-2 text-[#2A254B]'>Sign up for our newsletter and receive exclusive offers on new <br className='lg:block hidden'/> ranges, sales, pop up stores and more</p>

                <div className="mx-auto lg:mt-16 mt-8 max-w-xl">
                    <form action="#!" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                        <label htmlFor="email" className="sr-only">Email</label>

                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full border-gray-200 bg-[#F9F9F9] p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#2A254B]"
                        />
                        </div>

                        <button
                        className="group mt-4 flex w-full items-center justify-center gap-2 bg-[#2A254B] px-5 py-3 text-white sm:mt-0 sm:w-auto"
                        >
                        <span className="text-sm font-medium"> Sign Up </span>
                        </button>
                    </form>
                </div>  
            </div>
        </div>
    </>
  )
}

export default Hero3