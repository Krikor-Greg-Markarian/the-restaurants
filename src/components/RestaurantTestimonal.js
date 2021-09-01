import React from "react";

function RestaurantTestimonal() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-2">
        <div className="mt-20">
          <p className="font-bold text-2xl mb-8">Restautrant Testimonial</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            incidunt accusamus necessitatibus facere eius laudantium vitae
            exercitationem aspernatur numquam et impedit itaque facilis. Et
            exercitationem voluptatum sequi voluptate porro minus.
          </p>
          <div className="bg-white rounded-lg mt-2">
            <p className="text-gray-500 mt-4 p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis quas quod alias quia illo animi expedita nostrum
              quisquam natus rerum, ea architecto doloribus consequatur earum ex
              hic rem optio doloremque.
            </p>

            <div className="mb-6">
              <p className="font-bold inline p-4">Angela Jessica</p>
              <p className="inline ml-4 p-4">*****</p>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
        <div className = {"girl-icecream ml-8 rounded-lg"}>

        </div>
        {/* <img
          className="w-23 h-23 mt-14 rounded-lg ml-8"
          src="https://cdn.pixabay.com/photo/2020/09/15/23/09/ice-cream-5574910_960_720.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default RestaurantTestimonal;
