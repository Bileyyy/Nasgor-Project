import go1 from './asset/go1.jpg'
import go2 from './asset/go2.jpg'
import go3 from './asset/go3.jpg'
import go4 from './asset/go4.jpg'

const Menugo = () => {
  const items = [
    {
      id: 1,
      name: "Tempe Bacem",
      price: "Rp. 1k",
      image: go1,
    },
    {
      id: 2,
      name: "Tahu Bacem",
      price: "Rp. 1k",
      image: go2,
    },
    {
      id: 3,
      name: "Gembus Bacem",
      price: "Rp. 1k",
      image: go3,
    },
    {
      id: 4,
      name: "Pia-pia",
      price: "Rp. 1k",
      image: go4,
    },
  ];

  return (
    <div id="gorengan" className="min-h-screen bg-white px-6 py-4">
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

export default Menugo;
