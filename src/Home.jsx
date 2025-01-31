const Home = () => {
    return(
        <div className="min-h-screen w-full relative bg-[#FFFFFF] flex justify-end">
        <img
        src={gambar3}
        alt='elemen2'
        className='w-screen md:w-1/3 h-auto object-cover'/>

<div className="absolute top-36 right-1/6 transform -translate-x-1/2">
          <div className="w-80 h-80 bg-white rounded-full z-0" style={{ left: '100px' }}></div>
        </div>

        <div className="absolute top-40 right-1/6 mr-8 transform -translate-x-1/2">
          <div className="w-72 h-72 bg-black rounded-full z-0" style={{ left: '100px' }}></div>
        </div>

        <div className="absolute top-40 right-1/6" style={{ marginTop: '-28 px' }}>
          <img
            src={gambar2}
            alt='nasgor1'
            className='w-72 h-72 z-10 mr-44' 
          />
        </div>

        <div className="absolute top-10 left-10 text-black mt-40 ml-10">
          <h2 className='ml-2 mb-2 text-xl'>Nasi Goreng</h2>
          <h1 className="ml-2 text-6xl font-bold">D'JONGKO</h1>
          <p className="ml-2 mt-2 text-xl">Est. 1980</p>

          <button className='ml-2 mt-2'>
          <a href="#Menu" className="bg-amber-100 hover:bg-amber-200 text-black text-base py-1 px-2 rounded-full shadow-lgm transition duration-300">
                   Our Menu
                </a>
          </button>
        </div>
      </div>
    )
}

export default Home;