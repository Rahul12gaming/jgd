import React from "react";
import {
  FaClock,
  FaProjectDiagram,
  FaUsers
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import img from "../../assets/ourstory.jpg";

const Story = () => {
  window.addEventListener("scroll", function () {
    const footer = document.getElementById("about");
    const about2 = document.getElementById("about2");
    var box = footer.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom >= 0) {
      footer.classList.add("animate__fadeInLeft");
    } else {
      footer.classList.remove("animate__fadeInLeft");
    }
  });
  return (
    <section class=" py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
      <div class="max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div
            id="about"
            class="animate__animated w-full px-4 mb-10 lg:w-1/2 lg:mb-0 "
          >
            <div class="lg:max-w-md">
              <div class="px-4 pl-4 mb-6 border-l-4 border-primary-500">
                <span class="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p class="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet.
              </p>
              <div class="flex flex-wrap items-center">
                <div class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white dark:bg-gray-900">
                    <span class="text-primary-500 dark:text-primary-400">
                      <FaProjectDiagram size={40} />
                    </span>
                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      2097+
                    </p>
                    <h2 class="text-sm text-gray-700 dark:text-gray-400">
                      Projects and Plans
                    </h2>
                  </div>
                </div>
                <div class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white dark:bg-gray-900">
                    <span class="text-primary-500 dark:text-primary-400">
                      <IoPeople size={40} />
                    </span>
                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      3,590+
                    </p>
                    <h2 class="text-sm text-gray-700 dark:text-gray-400">
                      Helped people
                    </h2>
                  </div>
                </div>
                <div class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white dark:bg-gray-900">
                    <span class="text-primary-500 dark:text-primary-400">
                      <FaUsers size={40} />
                    </span>
                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      400+
                    </p>
                    <h2 class="text-sm text-gray-700 dark:text-gray-400">
                      Employee
                    </h2>
                  </div>
                </div>
                <div class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white dark:bg-gray-900">
                    <span class="text-primary-500 dark:text-primary-400">
                      <FaClock size={40} />
                    </span>
                    <p class="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      100
                    </p>
                    <h2 class="text-sm text-gray-700 dark:text-gray-400">
                      Timing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src={img}
              alt=""
              class="relative z-40 object-cover w-full h-[70%] rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
