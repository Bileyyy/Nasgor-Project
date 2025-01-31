import sat1 from './asset/sat1.jpg'
import sat2 from './asset/sat2.jpg'
import sat3 from './asset/sat3.jpg'
import sat4 from './asset/sat4.jpg'

const Menusa = () => {
    const items = [
      {
        id: 1,
        name: "Sate Kulit",
        price: "Rp. 5k",
        image: sat1,
      },
      {
        id: 2,
        name: "Sate Rempela/Ati",
        price: "Rp. 5k",
        image: sat2,
      },
      {
        id: 3,
        name: "Sate Usus",
        price: "Rp. 5k",
        image: sat3,
      },
      {
        id: 4,
        name: "Sate Telur Puyuh",
        price: "Rp. 5k",
        image: sat4,
      },
    ];
  
    return (
      <div id="sate" className="min-h-screen bg-white px-6 py-4">
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
      </div>
    );
  };
  
  export default Menusa;