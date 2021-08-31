import React from "react";

function Footer(props) {
  return (
    <div>
      <div className="grid grid-cols-4">
        <ul className="mt-6 m-4 p-4">
          <li>
            <a href="#" className="font-bold">
              Why Us ?
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 ">
              Responsive
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Engagement
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Scale
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Watch the demo
            </a>
          </li>
        </ul>
        <ul className="mt-6 m-4 p-4">
          <li>
            <a href="#" className="font-bold">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 ">
              Responsive
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Engagement
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Scale
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Watch the demo
            </a>
          </li>
        </ul>
        <ul className="mt-6 m-4 p-4">
          <li>
            <a href="#" className="font-bold">
              Company
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 ">
              Responsive
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Engagement
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Scale
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6">
              Watch the demo
            </a>
          </li>
        </ul>

        <ul className="mt-6 m-4 p-4">
          <li>
            <a href="#" className="font-bold">
              Our Social Media
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500  ">
              facebook
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 mt-6  ">
              insta
            </a>
          </li>
          <li>
            <a href="#" className="text-black mt-6 font-bold">
              Download App
            </a>
          </li>
          <li>
            <div className = "grid grid-cols-2 mr-8">
              <button className="bg-black text-white rounded-full px-2 py-1 inline-block">
                Google Play
              </button>
              <button className="bg-black text-white rounded-full px-2 py-1 inline-block">
                Apple Store
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
