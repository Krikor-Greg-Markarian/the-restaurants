import React from "react";

function Foodchoice() {
  return (
    <div className = "container mx-auto">
      <div className="ml-4 mr-4 w-auto">
        <div className="mt-5 rounded-lg bg-red-100 p-4">
          <p className="font-bold mt-4">Cheese Stuffed Burgers</p>
          <p className="text-gray-500 mt-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-red-500 inline ">$8.99</p>
          <p className="inline text-red-400 line-through ml-2">9.99</p>
          <button className="text-white bg-red-400 rounded-full px-2 y-4 ml-5 mb-4">
            Order Now
          </button>
          <img
            className="rounded-lg"
            src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Foodchoice;
