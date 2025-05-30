import React from "react";

const ProductCard = ({ image, brand, name, price }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
      <img
        src={image}
        alt={name || brand}
        className="object-cover w-full h-48"
      />

      <div className="p-6">
        <div className="mb-2 text-sm font-medium text-gray-600">{brand}</div>
        <h3 className="mb-4 overflow-hidden text-lg font-semibold leading-tight text-gray-900 whitespace-nowrap text-ellipsis">
          {name}
        </h3>
        <div className="mb-6 text-2xl font-bold text-header-red">₱ {price}</div>
        <div className="space-y-3">
          <button className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 rounded-md hover:cursor-pointer bg-header-red hover:bg-red-700">
            Add to Cart
          </button>

          {/* hide for now */}
          <button className="hidden w-full px-4 py-3 font-medium transition-colors duration-200 bg-white border border-red-600 rounded-md text-header-red hover:bg-gray-50">
            Quick view
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
