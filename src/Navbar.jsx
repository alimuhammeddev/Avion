import React from 'react';
import { NavbarMenu } from './components/mockData/data';
import { CiSearch } from 'react-icons/ci';
import { MdMenu } from 'react-icons/md';
import { PiShoppingCartThin } from 'react-icons/pi';
import ResponsiveMenu from './components/Responsive/ResponsiveMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
        <div className='lg:block hidden'>
            <div className='container flex items-center justify-between mt-5'>
                <button className='text-2xl hover:bg-[#4E4D93] p-2 rounded-full hover:text-[#ffffff] duration-200'>
                    <CiSearch />
                </button>
                <div>
                    <h1 className='text-4xl font-medium'>Avion</h1>
                </div>

                <div className='flex items-center gap-4'>
                    <Link to="/cart">
                        <button className='text-2xl hover:bg-[#4E4D93] p-2 rounded-full hover:text-[#ffffff] duration-200'>
                            <PiShoppingCartThin />
                        </button>
                    </Link>
                </div>
            </div>
            <div className='container mt-3'>
                <h1 className='border'></h1>
            </div>
        </div>
        <nav>
            <div className="container flex items-center lg:justify-center justify-between py-5">
                {/*Logo section*/}
                <div className='lg:hidden block'>
                    <h1 className='text-4xl font-medium'>Avion</h1>
                </div>
                {/*menu section*/}
                <div className="hidden md:block">
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {
                            NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link} className='inline-block py-1 px-3 font-normal'>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/*icons section*/}
                <div className='flex items-center gap-4 lg:hidden sm:block'>
                    <button className='text-2xl hover:bg-[#4E4D93] p-2 rounded-full hover:text-[#ffffff] duration-200'>
                        <CiSearch />
                    </button>
                    <Link to="/cart">
                        <button className='text-2xl hover:bg-[#4E4D93] p-2 rounded-full hover:text-[#ffffff] duration-200'>
                            <PiShoppingCartThin />
                        </button>
                    </Link>
                </div>
                {/*mobile hamburger menu section*/}
                <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                    <MdMenu className='text-4xl'/>
                </div>
            </div>
        </nav>

        {/*mobile sidebar section*/}
        <div className='lg:hidden'>
          <ResponsiveMenu open={open} />
        </div>
    </>
  )
}

export default Navbar