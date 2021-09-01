import React from "react";
import { FaPlus } from "react-icons/fa";

function Foodprice() {
  return (
    <div className="container mx-auto mt-4 flex bg-white rounded-lg ">
      <div className="grid grid-cols-4 p-4 rounded-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
          alt=""
          className="w-40 rounded-lg col-span-1"
        />

        <div className="col-span-2 ml-2 ">
          <p className="font-bold">Margherita Pizza + Choice of Desserts</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-red-500 inline ml-3 font-bold">$10.99</p>
          <p className="inline ml-4 ">*****(5.0)</p>

          <p className="text-gray-500 inline ml-5">5201 review</p>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <FaPlus className="text-red-600" />
        </div>
      </div>
    </div>

    
      //  <div class="flex justify-start bg-white rounded-lg mt-2">
      //   <div class="flex-none w-32 h-32 mr-4">
      //     <img
      //       src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
      //       alt=""
      //       className="w-40 rounded-lg col-span-1"
      //     />
      //   </div>
      //   <div class="flex-shrink w-320 h-32">
      //     <p className="font-bold">Margherita Pizza + Choice of Desserts</p>
      //     <p className="text-gray-500">
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
      //     </p>
      //     <p className="text-red-500 inline ml-3 font-bold">$10.99</p>
      //     <p className="inline ml-4">*****(5.0)</p>

      //     <p className="text-gray-500 inline ml-5">5201 review</p>
      //   </div>
      //   <div class="flex-none w-20 h-20 flex justify-center items-center ">
      //     <FaPlus className="text-red-600" />
      //   </div>
      // </div> 
    
  );
}

export default Foodprice;
