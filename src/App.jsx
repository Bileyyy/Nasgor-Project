import '@fortawesome/fontawesome-free/css/all.min.css';
import gambar1 from './asset/elemen1.png'
import gambar2 from './asset/nasgor1.png'
import gambar5 from './asset/nasgor2.jpg'
import gambar6 from './asset/nasgor3.jpg'
import Navbar from './Navbar'
import gambar3 from './asset/elemen2.png'
import gambar4 from './asset/lingput1.png'
import gambar8 from './asset/BACKGROUNDN.png'
// import gambar5 from './asset/ling2.png'
// import { Route, Router } from 'react-router-dom'
import About from './About'
// import Gallery from './Menu'
import Menu from './Menuma'
import Home from './Home'
import { Link } from 'react-router-dom';
// import Menu from './Menu'
// import Menumi from './Menumi'
// import Menugo from './Menugo'
// import Menusa from './Menusa'
// import Gallery from './Gallery'
import './Menuma.css'
import Contact from './Contact';
import Footer from './Footer';



function App() {

  return (
    <>
      <Navbar/>
      <div className="relative bg-[#FFFFFF] flex justify-end overflow-x-hidden">
        <img
        src={gambar8}
        alt='elemen2'
        className='w-full h-auto object-cover'/>

       <div className="absolute  text-black top-48 left-48">
          <h2 className='ml-2 mb-2 md:text-xl'>Nasi Goreng</h2>
          <h1 className="ml-2 md:text-6xl font-bold">D'JONGKO</h1>
          <p className="ml-2 mt-2 md:text-xl">Est. 1980</p>

          <Link to="/signup">
          <button className='ml-2 mt-2'>
          <a href="#Menu" className="bg-amber-100 hover:bg-amber-200 text-black text-base py-1 px-2 rounded-full shadow-lgm transition duration-300">
              Our Menu
          </a>
          </button>
          </Link>
       </div>
     </div>

        {/* <div className="absolute top-36 transform -translate-x-1/2">
          <div className="w-80 h-80 bg-white rounded-full z-0" style={{ left: '100px' }}></div>
        </div>

        <div className="absolute top-40 mr-8 transform -translate-x-1/2">
          <div className="w-72 h-72 bg-black rounded-full z-0" style={{ left: '100px' }}></div>
        </div> */}

        {/* <div className="absolute top-40 right-1/6" style={{ marginTop: '-28 px' }}>
          <img
            src={gambar2}
            alt='nasgor1'
            className='w-72 h-72 z-10 mr-44' 
          />
        </div> */}
        
        {/* <div className="absolute top-0 left-0" style={{ marginTop: '-28 px' }}>
          <img
            src={gambar5}
            alt='nasgor2'
            className='w-60 h-80' 
          />
        </div>
        <div className="absolute bottom-0 left-80" style={{ marginTop: '-28 px' }}>
          <img
            src={gambar6}
            alt='nasgor3'
            className='w-80 h-40' 
          />
        </div> */}
      
      
      <About/>
      <Menu/>
      {/* <Menumi/> */}
      {/* <Menugo/> */}
      {/* <Menusa/> */}
      {/* <Gallery/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
