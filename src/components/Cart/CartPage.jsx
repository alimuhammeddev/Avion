import React from 'react'
import { product1, product2 } from '../../assets'

const CartPage = () => {
  return (
    <>
        <div className='bg-[#F9F9F9] lg:p-5 p-2 pb-7'>
            <div className='container'>
                <div>
                    <h1 className='lg:text-3xl text-xl'>Your shopping cart</h1>
                    <div className='lg:grid lg:grid-cols-3 flex  gap-14 items-center lg:gap-40 mt-10'>
                        <h1>Product</h1>
                        <h1>Quantity</h1>
                        <h1>Total</h1>
                    </div>
                    <div>
                        <h1 className='border mt-5'></h1>
                    </div>
                    <div className='lg:grid lg:grid-cols-3 flex  items-center gap-10 lg:gap-40 mt-7'>
                        <div className='lg:flex items-center lg:gap-7'>
                            <img src={product1} alt="" className='lg:w-fit w-20'/>
                            <div>
                                <h1 className='text-[#2A254B] lg:text-xl text-sm'>Graystone vase</h1>
                                <p className='text-[#2A254B] mt-3 lg:block hidden'>A timeless ceramic vase with <br className='lg:block hidden'/> 
                                a tri color grey glaze.</p>
                                <p className='text-[#2A254B] mt-1'>£85</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#F9F9F9] flex items-center lg:gap-8 gap-3 w-fit p-2'>
                                <p className='text-[#CAC6DA]'>-</p>
                                <p className='text-[#2A254B]'>1</p>
                                <p className='text-[#CAC6DA]'>+</p>
                            </div>
                        </div>
                        <div>
                            <h1>£85</h1>
                        </div>
                    </div>
                    <div className='lg:grid lg:grid-cols-3 flex items-center gap-10 lg:gap-40 mt-7'>
                        <div className='lg:flex items-center lg:gap-7'>
                            <img src={product2} alt="" className='lg:w-fit w-20'/>
                            <div>
                                <h1 className='text-[#2A254B] lg:text-xl text-sm'>Basic white vase</h1>
                                <p className='text-[#2A254B] mt-3 lg:block hidden'>Beautiful and simple this is <br  className='lg:block hidden'/>
                                one for the classics</p>
                                <p className='text-[#2A254B] mt-1'>£125</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#F9F9F9] flex items-center lg:gap-8 gap-3 w-fit p-2'>
                                <p className='text-[#CAC6DA]'>-</p>
                                <p className='text-[#2A254B]'>1</p>
                                <p className='text-[#CAC6DA]'>+</p>
                            </div>
                        </div>
                        <div>
                            <h1>£125</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='border mt-5'></h1>
                    </div>
                </div>
                <div className='mt-7'>
                    <h1 className='text-[#4E4D93] text-right text-lg'>Subtotal <span className='text-[#2A254B] text-xl'>£120</span></h1>
                    <p className='text-[#4E4D93] text-right mt-3'>Taxes and shipping are calculated at checkout</p>
                    <div className='text-right mt-3'>
                        <button className='bg-[#2A254B] text-[#FFFFFF] p-3 px-5 lg:w-fit w-full'>Go to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartPage