// @ts-nocheck
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Menu,
  MenuIcon,
  Search,
  ShoppingCart,
} from "lucide-react";
import logo from "../assets/logo/mainLogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed z-50 w-full px-10 py-5 text-white bg-custom-black">
      <div className="container flex items-center justify-between mx-auto">
        {/* right */}

        <Sheet>
          <SheetTrigger>
            <MenuIcon className="hover:cursor-pointer" size={32} />
          </SheetTrigger>
          <SheetContent className="bg-custom-black" side="left">
            <SheetHeader>
              <SheetTitle>
                <img src={logo} alt="Boss Lan Logo" />
              </SheetTitle>
              <SheetDescription>
                <div className="mt-10 space-y-10 text-xl italic font-bold text-center text-white">
                  <h2
                    onClick={() => navigate("/")}
                    className="pb-2 border-b-2 hover:cursor-pointer"
                  >
                    Home
                  </h2>
                  <h2
                    onClick={() => navigate("appointments")}
                    className="pb-2 border-b-2 hover:cursor-pointer"
                  >
                    Appointments
                  </h2>
                  <h2
                    onClick={() => navigate("products")}
                    className="pb-2 border-b-2 hover:cursor-pointer"
                  >
                    Products Page
                  </h2>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <img src={logo} alt="" className="w-2/11 hover:cursor-pointer" />

        {/* middle */}
        <div className="flex items-center justify-center text-gray-500 bg-white rounded-sm w-6/10 ">
          <input
            type="text"
            placeholder="Search..."
            className="p-3 placeholder-gray-500 w-9/10"
          />

          <select
            name="categories"
            id="categories"
            className="hover:cursor-pointer"
          >
            <option value="">All categories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
            <option value="">accesories</option>
          </select>
          <div className="p-3 ml-3 text-white rounded-r-sm bg-header-red hover:cursor-pointer">
            <Search />
          </div>
        </div>

        {/* left */}
        <div className="flex items-center justify-center ">
          <div className="pr-5 border-r-1 hover:cursor-pointer">
            <p className="text-white hover:underline">Login / Signup</p>
            <div className="flex">
              <h3 className="font-bold">My account</h3> <ChevronDown />
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
