import React from 'react'
import { chair, chairs, claypot, darkchair, lamp, lights, pots, sit, vase } from '../../assets'

const Hero4 = () => {
  return (
    <>
        <div>
            <div className='container lg:mt-10 mt-7'>
                <div>
                    <h1 className='lg:text-3xl text-2xl text-center'>View all products</h1>
                </div>
            </div>

            <div>
                <div className='container lg:mt-10'>
                    <div className='flex lg:flex-row flex-col justify-between'>
                        <div>
                            <div className="mt-4 space-y-2">
                                <div>
                                    <h1 className='text-xl'>Product type</h1>
                                </div>
                                <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option1" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Furniture </strong>
                                </div>
                                </label>

                                <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option2" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Homeware </strong>
                                </div>
                                </label>

                                <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option3" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Sofas </strong>
                                </div>
                                </label>
                                <label htmlFor="Option4" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option4" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Homeware </strong>
                                </div>
                                </label>
                                <label htmlFor="Option5" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option5" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Light fittings </strong>
                                </div>
                                </label>
                                <label htmlFor="Option6" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option6" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Accessories </strong>
                                </div>
                                </label>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div>
                                    <h1 className='text-xl'>Price</h1>
                                </div>
                                <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option1" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> 0 - 100 </strong>
                                </div>
                                </label>

                                <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option2" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> 101 - 250 </strong>
                                </div>
                                </label>

                                <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option3" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> 250+ </strong>
                                </div>
                                </label>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div>
                                    <h1 className='text-xl'>Designer</h1>
                                </div>
                                <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option1" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Robert Smith </strong>
                                </div>
                                </label>

                                <label htmlFor="Option2" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option2" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Liam Gallagher </strong>
                                </div>
                                </label>

                                <label htmlFor="Option3" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option3" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Biggie Smalls </strong>
                                </div>
                                </label>
                                <label htmlFor="Option4" className="flex cursor-pointer items-start gap-4">
                                <div className="flex items-center">
                                    &#8203;
                                    <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#4E4D93]" id="Option4" />
                                </div>

                                <div>
                                    <strong className="font-medium text-gray-900"> Thom Yorke </strong>
                                </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className='grid lg:grid-cols-3 grid-cols-2 gap-5 mt-5'>
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
                                    <img src={sit} alt="" />
                                    <div className='mt-3'>
                                        <h1>Sit</h1>
                                        <p>£125</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={vase} alt="" />
                                    <div className='mt-3'>
                                        <h1>The Silky Vase</h1>
                                        <p>£399</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={lamp} alt="" />
                                    <div className='mt-3'>
                                        <h1>The Lucy Lamp</h1>
                                        <p>£399</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={darkchair} alt="" />
                                    <div className='mt-3'>
                                        <h1>Comfortable Chair</h1>
                                        <p>£399</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={lights} alt="" />
                                    <div className='mt-3'>
                                        <h1>Lights</h1>
                                        <p>£399</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={claypot} alt="" />
                                    <div className='mt-3'>
                                        <h1>White Vase</h1>
                                        <p>£399</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={chairs} alt="" />
                                    <div className='mt-3'>
                                        <h1>Chairs</h1>
                                        <p>£399</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mx-auto justify-center flex mt-7'>
                                <button className='bg-[#F9F9F9] p-3 px-7 text-[#2A254B] lg:w-fit w-full'>Load more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero4