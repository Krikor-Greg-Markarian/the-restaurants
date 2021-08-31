import React from "react";

function Foodprice() {
  return (
    <div className="container mx-auto mt-4">
      <div className="border-2 grid grid-cols-3 p-4">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
          alt=""
          className="w-40 rounded-lg col-span-1"
        />

        <div className="col-span-2 mt-3">
          <p className="font-bold"></p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-red-500 inline ml-3">$10.99</p>
          <p className="inline ml-4">*****(5.0)</p>
          <p className="text-gray-500 inline ml-5">5201 review</p>
        </div>
      </div>
    </div>
  );
}

export default Foodprice;
