import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import PageTitle from "../components/PageTitle/PageTitle";

const DashboardPage = () => {
    return (
        <div>
            <PageTitle title={'Dashboard Page'}/>
            <div className="bg-[#9538E2] pb-10">
                <Heading 
                    title="Dashboard" 
                    subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                />
                <div className="flex gap-3 items-center justify-center pt-5">
                    <NavLink 
                        to="/dashboard" 
                        end
                        className={({ isActive }) =>
                            isActive 
                                ? 'border-2 border-white text-[#9538E2] font-semibold bg-white px-5 py-2 rounded-full' 
                                : 'border-2 border-white text-white px-5 py-2 rounded-full'
                        }>Cart</NavLink>
                    <NavLink 
                        to="/dashboard/WishList" 
                        className={({ isActive }) =>
                            isActive 
                                ? 'border-2 border-white text-[#9538E2] font-semibold bg-white px-5 py-2 rounded-full' 
                                : 'border-2 border-white text-white px-5 py-2 rounded-full'
                        }>Wishlist</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardPage;