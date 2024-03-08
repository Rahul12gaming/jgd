import React, { useState, useRef, useEffect } from "react";
import combine from "../../../assets/combine.jpeg";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../../button/Button";

const MegaMenu = ({ categories, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const megaMenuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Close the Mega Menu panel when clicking outside
  const handleClickOutside = (event) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the Mega Menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={megaMenuRef}>
      {/* Trigger Button */}
      <div
        className={`px-4 flex focus:outline-none text-gray-700 hover:text-orange-500 focus:shadow-outline-orange ${
          isOpen ? "text-orange-500" : ""
        }`}
        onClick={handleToggle}
      >
        Products
        {isOpen ? (
          <RiArrowDropUpLine size={30} />
        ) : (
          <RiArrowDropDownLine size={30} />
        )}
      </div>

      {/* Mega Menu Panel */}
      {isOpen && (
        <div className="absolute bg-white to-green-100 top-full left-[-100px] mt-2 pl-8 border border-gray-300 shadow-lg rounded-md w-[600px] h-[500px] overflow-hidden">
          <div className="flex space-x-4 h-full pt-4">
            {/* Categories */}
            <div className="w-1/4 overflow-y-auto">
              <div className="mt-1 ml-1 mb-1 ">
                <Button
                  text="Explore"
                  link="/product"
                  textSize="md"
                  buttonSize="py-2"
                />
              </div>

              <ul>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className={`cursor-pointer my-8 ${
                      selectedCategory === category.id
                        ? "text-orange-500 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="w-3/4 overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </h2>
              <div className="grid grid-cols-2 p-5 " >
                {products
                  .filter((product) => product.categoryId === selectedCategory)
                  .map((product) => (
                    <Link to={product.link}>
                    <div
                      key={product.id}
                      className=" items-center py-4  text-base hover:text-orange-500 "
                    >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-28 w-40 object-cover shadow-lg mr-4 hover:scale-105"
                        />
                        <p>{product.name}</p>
                    </div>
                      </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage:
const categories = [
  { id: 1, name: "Categoryddss Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  // Add more categories as needed
];
const products = [
  { id: 1, name: "Product 1", categoryId: 1, image: combine, link: "/next" },
  { id: 2, name: "Product 2", categoryId: 1, image: combine, link: "/next" },
  { id: 2, name: "Product 2", categoryId: 1, image: combine, link: "/next" },
  { id: 2, name: "Product 2", categoryId: 1, image: combine, link: "/next" },
  { id: 3, name: "Product 3", categoryId: 2, image: combine, link: "/next" },
  { id: 4, name: "Product 4", categoryId: 2, image: combine, link: "/next" },
  { id: 5, name: "Product 5", categoryId: 3, image: combine, link: "/next" },
  { id: 6, name: "Product 6", categoryId: 3, image: combine, link: "/next" },
  { id: 7, name: "Product 7", categoryId: 4, image: combine, link: "/next" },
  { id: 8, name: "Product 8", categoryId: 4, image: combine, link: "/next" },
  { id: 9, name: "Product 9", categoryId: 1, image: combine, link: "/next" },
  { id: 10, name: "Product 10", categoryId: 2, image: "product2.jpg" },
  { id: 11, name: "Product 11", categoryId: 3, image: "product3.jpg" },
  { id: 12, name: "Product 12", categoryId: 4, image: "product4.jpg" },
  { id: 13, name: "Product 13", categoryId: 1, image: combine },
  // Add more products as needed
];

const App = () => {
  return <MegaMenu categories={categories} products={products} />;
};

export default App;
