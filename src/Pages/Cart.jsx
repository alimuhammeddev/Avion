import React from 'react'
import Navbar from '../Navbar'
import CartPage from '../components/Cart/CartPage'
import Footer from '../Footer'

const Cart = () => {
  return (
    <>
        <div className='overflow-x-hidden'>
            <Navbar />
        </div>
        <CartPage />
        <Footer />
    </>
  )
}

export default Cart