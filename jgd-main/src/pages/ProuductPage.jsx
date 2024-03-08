import React from "react";
import img from '../assets/combine.jpeg'

const products = [
  { id: 1, name: "Product 1", image: img },
  { id: 2, name: "Product 2", image: "product2.jpg" },
  { id: 3, name: "Product 3", image: "product3.jpg" },
  { id: 4, name: "Product 4", image: "product4.jpg" },
];
const ProductPage = () => {
  return (
    <div>
      {/* Label at the top */}
      <div className="bg-gradient-to-r from-orange-100 to-green-50 h-40  flex flex-col justify-center items-center mb-4">
        <h1 className="text-3xl font-bold text-center text-orange-500">
          Our Products
        </h1>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded-md transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bottom-4 justify-center mx-1 ">
              <h2 className="text-lg text-center font-semibold w-full text-orange-500 bg-green-200">
                {product.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductPage;
