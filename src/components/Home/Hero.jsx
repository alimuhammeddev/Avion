import React from 'react'
import { chair, checkmark, delivery, hero, imageblock, lamp, pots, purchase, sprout, vase } from '../../assets'

const Hero = () => {
  return (
    <>
        <div className='container lg:mt-10 mt-10'>
            <div className='bg-[#2A254B] w-fit lg:flex lg:gap-72'>
                <div className='lg:p-12 p-3'>
                    <h1 className='text-[#ffffff] lg:text-3xl text-xl'>The furniture brand for the <br /> future, with timeless designs</h1>
                    <div className='text-[#ffffff] lg:mt-32 mt-5 lg:hidden block'>
                        <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts. <br className='lg:block hidden'/> Tasteful colors and a beautiful way to display things digitally using <br className='lg:block hidden'/> modern web technologies.</p>
                    </div>
                    <div className='lg:mt-10 mt-5'>
                        <button className='bg-[#F9F9F926] text-[#ffffff] p-3 px-7 lg:w-fit w-full'>View collection</button>
                    </div>
                    <div className='text-[#ffffff] lg:mt-32 mt-5 lg:block hidden'>
                        <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts. <br className='lg:block hidden'/> Tasteful colors and a beautiful way to display things digitally using <br className='lg:block hidden'/> modern web technologies.</p>
                    </div>  
                </div>
                <div className='lg:block hidden'>
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>

        <div className='container lg:mt-16 mt-10'>
            <h1 className='text-center lg:text-2xl text-xl'>What makes our brand different</h1>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 lg:mt-10 mt-5'>
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

        <div className='container lg:mt-20 mt-10'>
            <div>
                <h1 className='lg:text-2xl text-xl'>New ceramics</h1>
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
                <button className='bg-[#F9F9F9] p-3 px-7 lg:w-fit w-full'>View collection</button>
            </div>
        </div>

        <div className='container lg:mt-20 mt-10 lg:mx-auto lg:justify-center lg:flex'>
            <div className='flex lg:flex-row flex-col lg:gap-2 gap-7'>
                <div>
                    <div className='bg-[#2A254B] lg:w-[634px] lg:h-[478px] lg:p-16 p-5'>
                        <h1 className='lg:text-3xl text-xl text-[#ffffff]'>It started with a small idea</h1>
                        <p className='lg:text-xl text-[#ffffff] lg:mt-5 mt-2'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                        <div className='lg:mt-52 mt-5'>
                            <button className='bg-[#F9F9F926] text-[#ffffff] p-3 px-7 lg:w-fit w-full'>View collection</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={imageblock} alt="" />
                </div>
            </div>
        </div>

        <div className='bg-[#F9F9F9] lg:p-20 lg:mt-24 mt-10'>
            <div className='container bg-[#ffffff] lg:p-16'>
                <h1 className='text-center lg:text-3xl text-xl text-[#2A254B]'>Join the club and get the benefits</h1>
                <p className='text-center lg:text-xl lg:mt-5 mt-3 text-[#2A254B]'>Sign up for our newsletter and receive exclusive offers on new <br className='lg:block hidden'/> ranges, sales, pop up stores and more</p>

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
                        type="submit"
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

export default Hero