import React from "react";
import { useState } from "react";
import Dropdown from "../../nxtPage/HamDrpDwn";
import { FaBars, FaBox, FaHandshake, FaNewspaper } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { IoMdContacts } from "react-icons/io";

const Hamburger = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="text-center">
      <button
        onClick={toggleDrawer}
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <FaBars size={20} color="gray"/>
      </button>

      <div
        id="drawer-navigation"
        className={`fixed  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "" : "-translate-x-full"
        } bg-white w-64 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>

        {/* make the drawer close itself when onclick onclick outside and, useeffect + eventlistener */}

        {/* Rest of your drawer content */}
        <div class="py-4 overflow-y-auto">
          <ul class="space-y-2 font-medium flex flex-col items-start gap-3">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg text-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CgOrganisation size={30} color="gray" />
                <span class=" flex-1 ms-3 ">Company</span>
              </a>
            </li>
            <li>{<Dropdown />}</li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaNewspaper size={30} color="gray" />
                <span class="flex-1 ms-3 whitespace-nowrap">Latest Blogs</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHandshake size={30} color="gray" />
                <span class="flex-1 ms-3 whitespace-nowrap">
                  Become a Dealer
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdContacts size={30} color="gray" />

                <span class="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
