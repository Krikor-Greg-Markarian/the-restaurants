import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaApple,
  FaPlus,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Footer(props) {
  return (
    <div>
      <div className="grid grid-cols-4 ">
        <ul className="mt-6 m-4 p-4">
          <li className="mb-8">
            <a href="#" className="font-bold">
              Why Us ?
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500">
              Responsive
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Engagement
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Scale
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Watch the demo
            </a>
          </li>
        </ul>
        <ul className="mt-6 m-4 p-4">
          <li className="mb-8">
            <a href="#" className="font-bold">
              Resources
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 ">
              Responsive
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Engagement
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Scale
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Watch the demo
            </a>
          </li>
        </ul>
        <ul className="mt-6 m-4 p-4">
          <li className="mb-8">
            <a href="#" className="font-bold">
              Company
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 ">
              Responsive
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Engagement
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Scale
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-gray-500 mt-6">
              Watch the demo
            </a>
          </li>
        </ul>

        <ul className="mt-6 m-4 p-4">
          <li className="mb-4">
            <a href="#" className="font-bold">
              Our Social Media
            </a>
          </li>

          <IconContext.Provider value={{ color: "blue" }}>
            <li>
              <a href="#">
                <FaFacebookF className="inline" />
                <FaInstagram className="inline ml-3" />
                <FaTwitter className="inline ml-4" />
              </a>
            </li>
          </IconContext.Provider>

          <li className="mt-10">
            <a href="#" className="text-black mt-6 font-bold">
              Download App
            </a>
          </li>
          <li>
            <div className="grid grid-cols-2 mr-8">
              <FaGooglePlay className="mt-4" />
              <FaApple className="mt-4" />

              {/* <button className="bg-black text-white rounded-full px-2 py-1 inline-block">
                Google Play
              </button>
              <button className="bg-black text-white rounded-full px-2 py-1 inline-block">
                Apple Store
              </button> */}
            </div>
          </li>
        </ul>
      </div>

      {/* <div class="flex justify-center ">
        <div class="flex-none w-32 h-32 mr-4">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
            alt=""
            className="w-40 rounded-lg col-span-1"
          />
        </div>
        <div class="flex-shrink w-30 h-30">
          <p className="font-bold">Margherita Pizza + Choice of Desserts</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-red-500 inline ml-3 font-bold">$10.99</p>
          <p className="inline ml-4">*****(5.0)</p>

          <p className="text-gray-500 inline ml-5">5201 review</p>
        </div>
        <div class="flex-none w-20 h-20 flex justify-center items-center ">
          <FaPlus className="text-red-600" />
        </div>
      </div> */}

      {/* <div class="flex justify-center ">
        <div class="flex-none w-32 h-32 mr-4">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
            alt=""
            className="w-40 rounded-lg col-span-1"
          />
        </div>
        <div class="flex-shrink w-30 h-30">
          <p className="font-bold">Margherita Pizza + Choice of Desserts</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-red-500 inline ml-3 font-bold">$10.99</p>
          <p className="inline ml-4">*****(5.0)</p>

          <p className="text-gray-500 inline ml-5">5201 review</p>
        </div>
        <div class="flex-none w-20 h-20 flex justify-center items-center ">
          <FaPlus className="text-red-600" />
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
