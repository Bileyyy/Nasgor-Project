import min1 from './asset/min1.jpg'
import min2 from './asset/min2.jpg'
import min3 from './asset/min3.jpg'
import min5 from './asset/min5.jpg'

const Menumi = () => {
    const items = [
      {
        id: 1,
        name: "Es Teh",
        price: "Rp. 3k",
        image: min1,
      },
      {
        id: 2,
        name: "Es Jeruk",
        price: "Rp. 4k",
        image: min2,
      },
      {
        id: 3,
        name: "Es Kopi",
        price: "Rp. 4k",
        image: min3,
      },
      {
        id: 4,
        name: "Teh Hangat/Panas",
        price: "Rp. 3k",
        image: min5,
      },
    ];
  
    return (
      <div id="minuman"className="min-h-screen bg-white px-6 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center mt-20">Menu</h1>
        <div className="-mt-4 flex space-x-6 mb-8 text-lg font-medium flex justify-center">
        <ul className="flex space-x-4">
                    <li>
                    <a href="#makanan" className="hover:text-amber-200">Makanan</a>
                    </li>
                </ul>
        <ul className="flex space-x-4">
                    <li>
                    <a href="#minuman" className="hover:text-amber-200">Minuman</a>
                    </li>
                </ul>
                <ul className="flex space-x-4">
                    <li>
                    <a href="#gorengan" className="hover:text-amber-200">Gorengan</a>
                    </li>
                </ul>
                <ul className="flex space-x-4">
                    <li>
                    <a href="#sate" className="hover:text-amber-200">Sate</a>
                    </li>
                </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-t-lg h-60 w-full object-cover mb-4"
              />
              <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4 mt-4">{item.name}</h2>
              <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
              <div className="mt-auto flex justify-end mb-4 mr-4">
                <button className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className='flex justify-end right-6 items-center -mt-60 -mr-4 absolute z-50'>
          <button className="text-lg bg-amber-100 text-black rounded-full px-4 py-2 hover:text-amber-100 hover:bg-black transition duration-200"
          style={{outline: 'none'}}
          >
            <i className='fas fa-arrow-right fa-md'></i>
          </button>
        </div> */}
      </div>
    );
  };
  
  export default Menumi;