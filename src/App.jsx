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
      <Navbar />
      <div className="relative bg-[#FFFFFF] flex justify-end overflow-x-hidden">
        <img src={gambar8} alt='elemen2' className='w-full h-auto object-cover' />
        <div className="absolute text-black" style={{ top: '28vh', left: '18vw' }}>
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Nasi Goreng</h2>
  <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">D'JONGKO</h1>
  <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">Est. 1980</p>
</div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-80 rounded-lg w-11/12 max-w-sm px-6 py-8 md:px-8 md:py-10 shadow-lg relative z-10">
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
      </div>

      <About />
      <Menu />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
