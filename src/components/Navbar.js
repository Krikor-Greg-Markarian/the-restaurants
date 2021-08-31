import React from "react";

function Navbar(props) {
  return (
    <nav className="float-left m-2 p-2">
      <p className="text-red-300 inline font-bold">Food</p>
      <p className="text-yellow-300 inline font-bold">Sense</p>

      <ul className="inline-block">
        <li className="text-gray-400 font-bold inline-block px-4">
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
        <input type="text" name="" id="" className="inline-block " />
        search
      </ul>
      <button className="text-white bg-red-400 rounded-full px-4 py-2">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
