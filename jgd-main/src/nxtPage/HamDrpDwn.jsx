import React, { useState } from "react";
import { GiFarmTractor } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={handleDropdownToggle}
      >
        <GiFarmTractor size={30} color="gray"/>
        <span className="flex-1 ms-3 mr-5 text-left rtl:text-right whitespace-nowrap">
          Products
        </span>
        <RiArrowDropDownLine size={30} color="gray"/>
      </button>
      {isDropdownOpen && (
        <ul id="dropdown-example" className="py-2 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Harvesting Solution
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Seeder Solution
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Farming Solution
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
