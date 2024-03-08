import React from "react";

export const FooterUsefulLinks = () => {
  // Array of useful links
  const usefulLinks = [
    { name: "Company", url: "/" },
    { name: "Blogs", url: "/" },
    { name: "All Products", url: "/" },
    { name: "Help", url: "/" },
  ];

  return (
    <div>
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Useful links
      </h6>

      {/* Loop through the usefulLinks array */}
      {usefulLinks.map((link, index) => (
        <p key={index} className="mb-4">
          <a href={link.url} className=" hover:text-orange-400 dark:text-neutral-200">
            {link.name}
          </a>
        </p>
      ))}
    </div>
  );
};


export const FooterProducts = () => {
  // Array of product links
  const productLinks = [
    { name: "Machine1", url: "/" },
    { name: "Machine2", url: "/" },
    { name: "Machine3", url: "/" },
    { name: "Machine4", url: "/" },
    { name: "Machine5", url: "/" },
    { name: "Machine6", url: "/" },
    { name: "Machine7", url: "/" },
    { name: "Machine8", url: "/" },
    { name: "Machine11", url: "/" },
    { name: "Machine12", url: "/" },
    { name: "Machine13", url: "/" },
    { name: "Machine14", url: "/" },
  ];

  return (
    <div className="ml-5">
      <h6 className="mb-4 flex justify-center text-center font-semibold uppercase md:justify-start">
        Products
      </h6>

      <div className=" grid grid-cols-2">
      {/* Loop through the productLinks array */}
      {productLinks.map((product, index) => (
        <p key={index} className="mb-4">
          <a href={product.url} className="hover:text-orange-400 dark:text-neutral-200">
            {product.name}
          </a>
        </p>
      ))}
      </div>
    </div>
  );
};
