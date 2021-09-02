import React from "react";

function Foodchoice(props) {
  return (
    <div className="w-3/2">
      <div className="ml-4 mr-4 w-auto">
        <div className="mt-5 rounded-lg bg-red-100 p-4">
          <p className="font-bold mt-4">{props.title}</p>

          <p className="text-gray-500 mt-4 mb-4">{props.subtitle}</p>
          <p className="text-red-500 inline ">{props.newprice}</p>
          <p className="inline text-red-400 line-through ml-2">
            {props.oldprice}
          </p>
          <button className="text-white bg-red-400 rounded-full px-2 y-4 ml-5 mb-4">
            {props.button}
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
