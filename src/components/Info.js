import React from "react";

function Info() {
  return (
    <section className="container mx-auto border-2 rounded-lg bg-white">
      <div className="grid grid-cols-3 p-4">
        <div>
          <p className = "text-center">Location</p>
          <p className="text-gray-500 text-center">1901 Thornidge Cir. Shilah New York</p>
        </div>
        <div>
          <p className = "text-center">Review</p>
          <p className="text-gray-500 text-center">****(5.0)</p>
        </div>
        <div>
          <p className = "text-center">Open Hours</p>
          <p className="text-gray-500 text-center">11am - 12pm (Mon-Fri)</p>
        </div>
      </div>
    </section>
  );
}

export default Info;
