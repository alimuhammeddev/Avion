import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import ProductListing from './Pages/ProductListing'
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<ProductListing />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  )
}

export default App