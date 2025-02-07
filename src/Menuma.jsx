import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Menuma.css';
import nasbar1 from './asset/nasbar1.jpg'
import nasbar2 from './asset/nasbar2.jpg'
import nasbar3 from './asset/nasbar3.jpg'
import nasbar4 from './asset/nasbar4.jpg'
import nasgor7 from './asset/nasgor7.jpg'
import nasru from './asset/nasru.jpg'
import nasdok from './asset/nasdok.jpg'
import bigo1 from './asset/bigo1.png'
import bireng1 from './asset/bireng1.png'
import bireng2 from './asset/bireng2.png'
import migo1 from './asset/migo1.jpg'
import cart1 from './asset/cart1.png'
import min1 from './asset/min1.jpg'
import min2 from './asset/min2.jpg'
import min3 from './asset/min3.jpg'
import min5 from './asset/min5.jpg'
import min4 from './asset/min4.jpg'
import min6 from './asset/min6.jpg'
import go1 from './asset/go1.jpg'
import go2 from './asset/go2.jpg'
import go3 from './asset/go3.jpg'
import go4 from './asset/go4.jpg'
import sat1 from './asset/sat1.jpg'
import sat2 from './asset/sat2.jpg'
import sat3 from './asset/sat3.jpg'
import sat4 from './asset/sat4.jpg'



const Menuma = () => {
  const fixedItem = {
    id: 4,
    name: "Nasi Goreng Ayam + Telur",
    price: "Rp. 12k",
    image: nasbar4,
  };

  //Makanan
  const initialItems = [
    {
      id: 1,
      name: "Nasi Goreng",
      price: "Rp. 12k",
      image: nasbar1,
    },
    {
      id: 2,
      name: "Nasi Goreng Ayam",
      price: "Rp. 12k",
      image: nasbar2,
    },
    {
      id: 3,
      name: "Nasi Goreng Jeroan",
      price: "Rp. 12k",
      image: nasbar3,
    },
    {
      id: 4,
      name: "Nasi Goreng Ayam + Telur",
      price: "Rp. 12k",
      image: nasbar4,
    },
  ];

  const new3Items = [
    {
      id: 5,
      name: "Nasi Goreng Ayam + Telur (Dadar/Ceplok)",
      price: "Rp. 13k",
      image: nasbar3,
    },
    {
      id: 6,
      name: "Nasi Goreng Jeroan + Telur",
      price: "Rp. 12k",
      image: nasgor7,
    },
    {
      id: 7,
      name: "Nasi Godok",
      price: "Rp. 12k",
      image: nasdok,
    },
    {
      id: 8,
      name: "Nasi Ruwet",
      price: "Rp. 12k",
      image: nasru,
    },
  ];

  const new4Items = [
    {
      id: 9,
      name: "Bihun Godok",
      price: "Rp. 12k",
      image: bigo1,
    },
    {
      id: 10,
      name: "Mie Godok",
      price: "Rp. 12k",
      image: migo1,
    },
    {
      id: 11,
      name: "Bihun Goreng",
      price: "Rp. 12k",
      image: bireng1,
    },
    {
      id: 12,
      name: "Mie Goreng",
      price: "Rp. 12k",
      image: bireng2,
    },
  ];

  //Minuman
  const newItems = [
    {
      id: 13,
      name: "Es Teh",
      price: "Rp. 3k",
      image: min1,
    },
    {
      id: 14,
      name: "Es Jeruk",
      price: "Rp. 4k",
      image: min2,
    },
    {
      id: 15,
      name: "Es Kopi",
      price: "Rp. 4k",
      image: min3,
    },
    {
      id: 16,
      name: "Teh Hangat/Panas",
      price: "Rp. 3k",
      image: min5,
    },
  ];

  const new5Items = [
    {
      id: 1,
      name: "Es Sirup",
      price: "Rp. 5k",
      image: min4,
    },
    {
      id: 2,
      name: "Es Soda Gembira",
      price: "Rp. 10k",
      image: min6,
    },
  ];

  //Gorengan
  const new1Items = [
    {
      id: 17,
      name: "Tempe Bacem",
      price: "Rp. 1k",
      image: go1,
    },
    {
      id: 18,
      name: "Tahu Bacem",
      price: "Rp. 1k",
      image: go2,
    },
    {
      id: 19,
      name: "Gembus Bacem",
      price: "Rp. 1k",
      image: go3,
    },
    {
      id: 20,
      name: "Pia-pia",
      price: "Rp.1k",
      image: go4,
    },
  ];

  //Sate
  const new2Items = [
    {
      id: 21,
      name: "Sate Kulit",
      price: "Rp. 5k",
      image: sat1,
    },
    {
      id: 22,
      name: "Sate Rempela/Ati",
      price: "Rp. 5k",
      image: sat2,
    },
    {
      id: 23,
      name: "Sate Usus",
      price: "Rp. 5k",
      image: sat3,
    },
    {
      id: 24,
      name: "Sate Telur Puyuh",
      price: "Rp.5k",
      image: sat4,
    },
  ];

  const allItems = [...initialItems, ...newItems, ...new1Items, ...new2Items];




  const [items, setItems] = useState(initialItems);
  const [cart, setCart] = useState([]);
  // const [showCart, setShowCart] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  //Add to Cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  //Remove Cart
  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === itemId);
      if (existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter(cartItem => cartItem.id !== itemId);
      }
    });
  };

  //Total Price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
        const price = parseInt(item.price.replace('Rp. ', '').replace('k', '000'));
        return total + (price * item.quantity); 
    }, 0);
};

//Button Cancel Order
  const handleCancelOrder = () => {
    setCart([]); 
  };

  //Button Order Now
  const handleOrderNow = () => {
    const phoneNumber = "6288228750758";
    const totalPrice = calculateTotalPrice(); 
    const message = `Saya ingin memesan:/n${cart
        .map((item) => `${item.name} (x${item.quantity}) - Rp. ${item.price}`)
        .join("/n")}/n/nTotal Harga: Rp. ${totalPrice}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};


//Your Cart
  const Cart = () => (
    <div className="cart bg-amber-100 p-4 rounded-lg shadow-lg mt-10 mx-4 md:mr-80">
      <h2 className="text-xl font-bold mb-2">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center bg-white p-2 rounded-lg shadow">
              <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">Price: {item.price}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-lg bg-red-500 text-white rounded-full w-8 h-8 hover:bg-red-600 transition"
                >
                  -
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="text-lg bg-green-500 text-white rounded-full w-8 h-8 hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Total Price:</h3>
            <p className="text-lg font-semibold">Rp. {calculateTotalPrice()}</p>
        </div>
        <div className="mt-4 pb-2 flex justify-end">
            <button
            onClick={handleCancelOrder}
                className="mr-4 w-28 h-10 bg-white text-sm text-black rounded-2xl py-2 hover:bg-red-500 hover:text-white transition"
            >
                Cancel Order
            </button>
            <button
            onClick={handleOrderNow}
                className="w-24 h-10 bg-white text-sm text-black rounded-2xl py-2 hover:bg-green-500 hover:text-white transition"
            >
                Order Now
            </button>
        </div>
    </div>
  );

  const itemsToShow = items.slice(startIndex, startIndex + 4);

  const displayItems = [fixedItem, ...itemsToShow];

  return (
    <div id="menu" className="min-h-screen bg-white px-6 py-4">
      <h1 className="text-4xl font-bold mb-6 text-center mt-20">Menu</h1>
      <div className="-mt-4 space-x-6 mb-8 text-lg font-medium flex justify-center">
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
        {itemsToShow.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition hover:duration-300">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
        {new3Items.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4 ">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
        {new4Items.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4 ">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-20'>
        {newItems.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
        {new5Items.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4 ">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-20'>
        {new1Items.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4 ">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
        {new2Items.map((item) => (
          <div
            key={item.id}
            className="bg-beige rounded-lg shadow-xl p-1 text-center max-w-xs mx-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg h-60 w-full object-cover mb-4"
            />
            <h2 className="mt-4 text-lg font-semibold mb-2 text-left ml-4 ">{item.name}</h2>
            <p className="text-gray-700 mb-2 -mt-2 text-left ml-4">{item.price}</p>
            <div className="mt-auto flex justify-end mb-4 mr-4">
              <button
              onClick={() => handleAddToCart(item)}
               className="text-lg bg-white border-2 border-black rounded-full px-2 -py-2 hover:bg-black hover:text-white transition">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && <Cart />}
    </div> 
  );
};

export default Menuma;
