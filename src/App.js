import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Restaurantbg from "./components/Restaurantbg";
import Info from "./components/Info";
import Foodchoice from "./components/Foodchoice";
import Foodprice from "./components/Foodprice";
import RestaurantTestimonal from "./components/RestaurantTestimonal";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <section>
        <Top />
      </section>
      <section className="pt-40 relative top-12">
        <Restaurantbg />
      </section>
      <section className="absolute mt-1">
        <Info />
      </section>

      <section>
        <div className="mt-40">
          <p className="font-bold text-2xl inline">Restaurant Promo</p>
          <p className="text-gray-400 inline ml-20">Countdown:</p>
          <p className="text-red-500 inline ml-2">23</p>
          <p className="text-red-300 inline text-xs">Hours</p>
          <p className="text-red-500 inline ml-2">13</p>
          <p className="text-red-300 inline text-xs">Minutes</p>
        </div>
        <div className="grid grid-cols-2">
          <Foodchoice />
          <Foodchoice />
        </div>
      </section>
      <section className="mt-12">
        <p className="font-bold inline">Recommended Food</p>
        <input
          placeholder="Search Food..."
          type="text"
          name=""
          id=""
          className="rounded-full px-2 py-2 inline border-2 text-center ml-12"
        />
        <p className="text-red-700 rounded-full bg-red-100 px-4 py-2 inline font-bold float-right">
          Filter
        </p>
        <ul className="container mx-auto mt-12">
          <li className="bg-red-200  rounded-full inline px-4">
            <a href="#">All</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-4">
            <a href="#">Pizza</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-4">
            <a href="#">Asian</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-4">
            <a href="#">Drink</a>
          </li>
          <li className="hover:bg-red-200 rounded-full inline px-4">
            <a href="#">Salad</a>
          </li>
          <li className="hover:bg-red-200 rounded-ful inline px-4l">
            <a href="#">Burger</a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <Foodprice />
        <Foodprice />
        <Foodprice />
        <Foodprice />
      </section>

      <section className="float-left">
        <RestaurantTestimonal />
      </section>

      <section className="mt-30">
        <p className="text-red-300 inline font-bold text-2xl">Food</p>
        <p className="text-yellow-300 inline font-bold text-2xl">Sense</p>

        <Footer />
      </section>
    </div>
  );
}

export default App;
