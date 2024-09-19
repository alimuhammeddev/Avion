import React from 'react'
import { imageblock } from '../../assets'

const Hero5 = () => {
  return (
    <>
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">
                    <div>
                        <img src={imageblock} alt="" />
                    </div>

                    <div className="mt-8">
                    <a href="#" className="text-2xl font-bold text-[#2A254B]"> 0151 475 4450 </a>

                    <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                    </div>
                </div>

                <div className="bg-white p-8 lg:col-span-3 lg:p-12">
                    <form action="#" className="space-y-4">
                    <div>
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input
                        className="w-full border-gray-200 border p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full border-gray-200 border p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            id="email"
                        />
                        </div>

                        <div>
                        <label className="sr-only" htmlFor="phone">Phone</label>
                        <input
                            className="w-full border-gray-200 border p-3 text-sm"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                        />
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">Message</label>

                        <textarea
                        className="w-full border-gray-200 border p-3 text-sm"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-block w-full bg-[#2A254B] px-5 py-3 font-medium text-white sm:w-auto"
                        >
                        Send Enquiry
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero5