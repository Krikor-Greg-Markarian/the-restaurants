import React from "react";

function Top() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <div className="mt-4">
          <p className="text-red-300  font-bold text-2xl inline">Food</p>
          <p className="text-yellow-300 inline  font-bold text-2xl">Sense.</p>
        </div>

        <div className="mt-2">
          <ul className="flex justify-center items-center">
            <li className="text-gray-400 font-bold inline-block px-4 ">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-400 font-bold inline-block px-4">
              <a href="#">About</a>
            </li>
            <li className="text-gray-400 font-bold inline-block px-4">
              <a href="#">Restaurant</a>
            </li>
            <li className="text-gray-400 font-bold inline-block px-4">
              <a href="#">Pages</a>
            </li>
            <li className="text-gray-400 font-bold inline-block px-4">
              <a href="#">Services</a>
            </li>
            <li className="text-gray-400 font-bold inline-block px-4">
              <a href="#">Contact</a>
            </li>

            <div className="flex ">
              <input
                placeholder="Search Here..."
                type="text"
                name=""
                id=""
                className="text-center rounded-lg focus:outline-none"
              />
              <button className="text-white bg-red-400 rounded-full px-4 py-2 items-center ">
                Login.
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Top;
