import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Restaurantbg from "./components/Restaurantbg";
import Info from "./components/Info";
import Foodchoice from "./components/Foodchoice";
import Foodprice from "./components/Foodprice";
import RestaurantTestimonal from "./components/RestaurantTestimonal";
import Footer from "./components/Footer";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPlus,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const object = {
  data: [
    {
      title: "Cheese Stuffed Burgers",
      subtitle: "Lorem ipsum dolor sit amet consectetur dipisicing elit.",
      newprice: "$8.99",
      oldprice: "9.99",
      button: "Order Now",
    },
    {
      title: "Cheese Stuffed Burgers",
      subtitle: "Lorem ipsum dolor sit amet consectetur dipisicing elit.",
      newprice: "$8.99",
      oldprice: "9.99",
      button: "Order Now",
    },
  ],
};

function App() {
  return (
    <div>
      <section>
        <Top />
      </section>
      <section className="pt-40 ">
        <Restaurantbg />
      </section>
      <section className="w-100 container mx-auto -mb-32 rounded-lg ">
        <Info />
      </section>

      <section>
        <div className="mt-40">
          <p className="font-bold text-2xl inline ml-12">Restaurant Promo</p>
          <div className="float-right mr-20">
            <p className="text-gray-400 inline ml-20">Countdown:</p>
            <p className="text-red-500 inline ml-2">23</p>
            <p className="text-red-300 inline text-xs">Hours</p>
            <p className="text-red-500 inline ml-2">13</p>
            <p className="text-red-300 inline text-xs">Minutes</p>
          </div>
        </div>


        <div className="grid grid-cols-2 container mx-auto lg:w-3/5">
          {object.data.map((item, idx) => (
            <Foodchoice
              key={idx}
              title={item.title}
              subtitle={item.subtitle}
              newprice={item.newprice}
              oldprice={item.oldprice}
              button={item.button}
            />
          ))}
          


          
        </div>
      </section>

      <section className="mt-12 container mx-auto">
        <p className="font-bold text-2xl inline">Recommended Food</p>
        <input
          placeholder="Search Food..."
          type="text"
          name=""
          id=""
          className="rounded-full px-2 py-2 inline border-2 text-center ml-12 w-64 focus:outline-none"
        />
        <p className="text-red-700 rounded-full bg-red-100 px-4 py-2 inline font-bold float-right">
          Filter
        </p>
        <ul className="container mx-auto mt-12 text-gray-600 font-bold">
          <li className="bg-red-200  rounded-full inline px-6 py-2 ">
            <a href="#">All</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-6 py-2">
            <a href="#">Pizza</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-6 py-2">
            <a href="#">Asian</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-6 py-2">
            <a href="#">Drink</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-6 py-2">
            <a href="#">Salad</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-6 py-2">
            <a href="#">Burger</a>
          </li>
        </ul>
      </section>

      <section className="mt-8 container mx-auto sm:w-full md:w-2/3 lg:w-1/2">
        <Foodprice />
        <Foodprice />
        <Foodprice />
        <Foodprice />
      </section>

      <section className="float-left">
        <RestaurantTestimonal />
      </section>

      <section className="mt-30 container mx-auto">
        <p className="text-red-300 inline font-bold text-2xl">Food</p>
        <p className="text-yellow-300 inline font-bold text-2xl">Sense</p>

        <Footer />
      </section>
    </div>
  );
}

export default App;
