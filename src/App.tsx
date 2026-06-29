import { Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route } from 'react-router-dom'
import About from './Pages/About'
import { AnimatePresence } from 'framer-motion'
import Services from './Pages/Services'
import Work from './Pages/Work'
import Contact from './Pages/Contact'

function App() {


  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
