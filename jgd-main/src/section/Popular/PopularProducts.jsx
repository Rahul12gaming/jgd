import React from 'react';
import combine from '../../assets/combine.jpeg';

const products = [
  { id: 1, name: 'Combine', image: combine },
  { id: 2, name: 'Combine', image: combine },
  { id: 3, name: 'Combine', image: combine },
  { id: 4, name: 'Combine', image: combine },
  { id: 5, name: 'Combine', image: combine },
  { id: 6, name: 'Combine', image: combine },
  { id: 7, name: 'Combine', image: combine },
  { id: 8, name: 'Combine', image: combine },
  // Add more products as needed
];

const PopularProducts = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <div className="flex flex-col bg-green-100 m-auto p-auto">
        <h1 className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-extrabold text-4xl text-gray-900">
          Popular Products
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-35 md:ml-20 ml-10">
            {products.map((product) => (
              <div key={product.id} className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    className="object-cover rounded-t-md h-[80%] w-full hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                  <h2 className="md:text-2xl text-center justify-center text-xl font-bold z-10">
                    {product.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>
    </div>
  );
};

export default PopularProducts;
