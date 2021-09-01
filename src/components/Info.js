import React from "react";

function Info() {
  return (
    <div className="rounded-lg bg-white">
      <div className="grid grid-cols-3 p-4 container mx-auto">
        <div className="border-r-2">
          <p className="text-center">Location</p>
          <p className="text-gray-500 text-center">
            1901 Thornidge Cir. Shilah New York
          </p>
        </div>
        <div className="border-r-2">
          <p className="text-center">Review</p>
          <p className="text-gray-500 text-center">****(5.0)</p>
        </div>
        <div>
          <p className="text-center">Open Hours</p>
          <p className="text-gray-500 text-center">11am - 12pm (Mon-Fri)</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
