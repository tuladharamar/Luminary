import { useState } from 'react';
// import Logo from '../assets/Logo.png'
import nav from '../Constant/nav'
import { Menu, X } from 'lucide-react';
import DarkMode from './DarkMode';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      <nav className="p-5 border-b-2 border-gray-300 dark:bg-gray-900 transition-all duration-300">
        <div className="flex items-center justify-between max-w-7xl mx-auto  ">
          {/* logo */}
          <div className="flex gap-1 items-center">
            {/* <img src={Logo} alt="" width={100} className="" /> */}
            <h1 className="text-xl font-bold dark:text-white">
              <Link to='/'>
                Luminary
              </Link>
            </h1>
          </div>
          {/* Nav */}
          <div className='flex items-center'>
            <ul className='hidden lg:flex items-center '>
              {nav.map(item => (
                <li key={item.id} className='font-semibold text-gray-500 dark:text-white hover:bg-gray-400/10 px-5 py-3 rounded-md  cursor-pointer relative '>
                  <Link to={item.page} className=''>
                    {item.label}
                  </Link>
                </li>
              ))}
              <button className='bg-blue-600 px-5 py-2  rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-700 ml-5 animate-pulse'>
                <Link to='/contact'>
                  Get Started
                </Link>
              </button>
            </ul>
            <div className='pl-10 hidden lg:block'>
              <DarkMode />
            </div>
          </div>

          {/* MobileMenu */}
          <div onClick={() => setMobileMenu((prev) => !prev)} className='block lg:hidden cursor-pointer dark:text-white'>
            {mobileMenu ? <X /> : <Menu />}
          </div>
          <AnimatePresence>
            {mobileMenu && (
              <>
                <motion.ul className='absolute top-24 left-0  w-full flex flex-col justify-center items-center cursor-pointer dark:bg-black dark:text-white z-1000 bg-white h-screen'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}>
                  {nav.map(mobileItem => (
                    <motion.li key={mobileItem.id} onClick={() => setMobileMenu((prev) => !prev)} className='py-8 text-center border-b-2 w-full border-gray-300 '>
                      <Link to={mobileItem.page}>
                        {mobileItem.label}
                      </Link>
                    </motion.li>
                  ))}
                  <div className='py-5'>
                    <DarkMode />
                  </div>
                </motion.ul>

              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

