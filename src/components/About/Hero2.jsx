import React from 'react'
import { about1, about2, checkmark, delivery, purchase, sprout } from '../../assets'

const Hero2 = () => {
  return (
    <>
        <div className='container lg:mt-20 mt-7'>
            <div>
                <h1 className='lg:text-center lg:text-3xl text-2xl'>A brand built on the love of craftmanship, <br className='lg:block hidden'/> quality and outstanding customer service</h1>
            </div>

            <div>
                <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-20 lg:mt-20 mt-8'>
                    <div className='lg:mt-16'>
                        <h1 className='lg:text-3xl text-xl lg:mt-0 mt-6'>From a studio in London to a global brand with over 400 outlets</h1>
                        <p className='lg;text-xl lg:mt-7 mt-3'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                        <p className='lg:text-xl lg:mt-7 mt-3'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        <div className='lg:mt-24 mt-7'>
                            <button className='bg-[#F9F9F9] p-3 px-7 lg:w-fit w-full'>Get in touch</button>
                        </div>
                    </div>
                    <div>
                        <img src={about1} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className='grid lg:grid-cols-2 gap-20 lg:mt-20 mt-10'>
                    <div>
                        <img src={about2} alt="" />
                    </div>
                    <div className='lg:mt-16 -mt-10'>
                        <h1 className='lg:text-3xl text-xl'>Our service isn’t just personal, it’s actually hyper personally exquisite</h1>
                        <p className='lg:text-xl lg:mt-7 mt-3'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                        <p className='lg:text-xl lg:mt-7 mt-3'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        <div className='lg:mt-24 mt-7'>
                            <button className='bg-[#F9F9F9] p-3 px-7 lg:w-fit w-full'>Get in touch</button>
                        </div>
                    </div>
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

        <div className='bg-[#F9F9F9] lg:p-20 lg:mt-24 mt-10'>
            <div className='container bg-[#ffffff] lg:p-16'>
                <h1 className='text-center lg:text-3xl text-xl text-[#2A254B]'>Join the club and get the benefits</h1>
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

export default Hero2