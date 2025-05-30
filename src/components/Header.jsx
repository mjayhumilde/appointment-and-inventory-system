import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import logo from "../assets/logo/mainLogo.png";

const Header = () => {
  return (
    <header className="fixed w-full px-10 py-5 bg-custom-black">
      <div className="container flex items-center justify-between mx-auto">
        {/* right */}
        <img src={logo} alt="" className="w-1/7" />

        {/* middle */}
        <div className="flex items-center justify-center text-gray-500 bg-white w-6/10">
          <input
            type="text"
            placeholder="Search..."
            className="p-3 placeholder-gray-500 w-9/10"
          />

          <select name="categories" id="categories">
            <option value="">All categories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
          </select>
          <div className="p-3 ml-3 text-white bg-header-red">
            <Search />
          </div>
        </div>

        {/* left */}
        <div className="flex items-center justify-center ">
          <div className="pr-5 border-r-1 hover:cursor-pointer">
            <p className="text-white hover:underline">Login / Signup</p>
            <div className="flex">
              <h3>My account</h3> <ChevronDown />
            </div>
          </div>
          <div className="flex items-center justify-center pl-5 space-x-4 hover:cursor-pointer">
            <div className="relative ">
              <ShoppingCart />
              <span className="absolute px-1 text-sm font-bold text-white rounded-full bg-header-red -right-2 -top-3">
                0
              </span>
            </div>
            <span className="font-bold">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
