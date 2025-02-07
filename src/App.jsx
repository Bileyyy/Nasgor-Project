import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import gambar1 from './asset/elemen1.png';
import gambar2 from './asset/nasgor1.png';
import gambar3 from './asset/elemen2.png';
import gambar4 from './asset/lingput1.png';
import gambar5 from './asset/nasgor2.jpg';
import gambar6 from './asset/nasgor3.jpg';
import gambar8 from './asset/BACKGROUNDN.png';
import Navbar from './Navbar';
import About from './About';
import Menu from './Menuma';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './ProtectedRoute';
import Menuma from './Menuma';

function App() {
  return (
    <Router>

<div className="h-screen flex flex-col md:flex-row items-center justify-center bg-no-repeat bg-center bg-white relative overflow-hidden">

<div className="absolute right-96 mr-8 bottom-32">
  <img 
  src={gambarB}
  alt="gambarB"
  className="w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60" 
  />
</div>

<div className="absolute left-96 ml-8 top-24">
  <img
  src={gambarA}
  alt="gambarA"
  className="w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60" 
  />
</div>
</div>

      <Navbar />
      <div className="relative bg-[#FFFFFF] flex justify-end overflow-x-hidden">
        <img src={gambar8} alt='elemen2' className='w-full h-auto object-cover' />
        <div className="absolute text-black top-48 left-48">
          <h2 className='ml-2 mb-2 md:text-xl'>Nasi Goreng</h2>
          <h1 className="ml-2 md:text-6xl font-bold">D'JONGKO</h1>
          <p className="ml-2 mt-2 md:text-xl">Est. 1980</p>

          <Link to="/signup">
            <div className="bg-amber-100 hover:bg-amber-200 text-black text-base py-1 px-2 rounded-full shadow-lg transition duration-300">
              Our Menu
            </div>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menuma" element={
          <ProtectedRoute>
            <Menuma />
          </ProtectedRoute>
        } />
      </Routes>

      <About />
      <Menu />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
