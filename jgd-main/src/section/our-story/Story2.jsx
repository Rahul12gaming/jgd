import React from "react";
import { FaTractor } from "react-icons/fa";
import backImg from '../../assets/workplant.jpg'

const AgricultureIndustrySection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900" style={{
        backgroundImage: `url(${backImg})`,
        backgroundColor: "rgba(0, 0, 0)",
        backgroundAttachment: "fixed",
      }}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for Agriculture Machine Manufacturers
            </h2>
            <p className="text-gray-100 sm:text-xl dark:text-gray-400">
              Here at <span className=" text-orange-400">Jai Gurudev Industries</span>, we focus on providing technology solutions for the agriculture machine manufacturing industry, empowering farmers to grow food more efficiently.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="backdrop-blur-sm bg-black/10 p-5">
              <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FaTractor size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Equipment Manufacturing</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Design and manufacture cutting-edge agricultural machinery to enhance farm productivity and efficiency.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/10 p-5">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FaTractor size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Tool Development</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Create innovative tools and implements that simplify farming processes, making it easier for farmers to cultivate their land.
              </p>
            </div >
            <div className="backdrop-blur-sm bg-black/10 p-5">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FaTractor size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Precision Agriculture
              </h3>
              <p className="text-gray-100 dark:text-gray-400">
                Develop technologies for precision farming, including automated tasks and data-driven decision-making for optimal crop yield.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/10 p-5">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FaTractor size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Financial Solutions</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Provide financial tools tailored for agriculture machine manufacturers, supporting critical financial operations and budgeting.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/10 p-5">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FaTractor size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Research and Development
              </h3>
              <p className="text-gray-100 dark:text-gray-400">
                Drive innovation through collaborative research and development, ensuring the continuous improvement of agricultural tools and machinery.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-black/10 p-5">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FaTractor size={30} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Supply Chain Management</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Streamline operations with customizable workflows, ensuring the efficient production and distribution of agricultural equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgricultureIndustrySection;
