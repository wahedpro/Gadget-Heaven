import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../../layouts/MainLayout";

const Navbar = () => {
    const location = useLocation();
    const { productCount } = useContext(ProductContext);

    // const isHomePage = location.pathname === "/";

    const whiteBackgroundPaths = ["/", "/category/Laptops", "/category/Phones", "/category/Accessories", "/category/Smart%20Watches","/category/Headphone"];
    const isHomePage = whiteBackgroundPaths.includes(location.pathname);



    return (
        <div className="w-[95%] mx-auto pt-3">
            <div className={`flex items-center justify-between py-4 px-20 rounded-tl-xl rounded-tr-xl ${
                    isHomePage ? 'bg-[#9538E2]' : 'bg-white'
                }`}>
                <div>
                    <h1 className={`text-xl font-semibold ${isHomePage ? 'text-white':'text-black'}`}>Gadget Heaven</h1>
                </div>
                <div className={`flex gap-3 items-center ${isHomePage ? 'text-white':'text-black'}`}>
                    <NavLink to='/' className={({isActive})=>` ${isActive ? 'underline underline-offset-2': ' '}`}>Home</NavLink>
                    <NavLink to='/statistics' className={({isActive})=>` ${isActive ? 'text-[#9538E2] font-semibold': ' '}`}>Statistics</NavLink>
                    <NavLink to='/dashboard' className={({isActive})=>` ${isActive ? 'text-[#9538E2] font-semibold': ' '}`}>Dashboard</NavLink>
                    <NavLink to='/feedback' className={({isActive})=>` ${isActive ? 'text-[#9538E2] font-semibold': ' '}`}>Feedback</NavLink>
                </div>
                <div className="space-x-2">
                <button className={`relative inline-flex items-center p-2 rounded-full ${isHomePage ? 'bg-white' : 'border border-gray-300'}`}>
                    <IoCartOutline />
                    {productCount > 0 && (
                            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                                {productCount}
                            </span>
                    )}
                </button>
                    <button className={`p-2 rounded-full ${isHomePage ? 'bg-white':'border border-gray-300'}`}><FaRegHeart/></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;