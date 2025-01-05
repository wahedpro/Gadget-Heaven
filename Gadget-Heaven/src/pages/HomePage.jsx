import {Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import PageTitle from "../components/PageTitle/PageTitle";

const HomePage = () => {
    const categories = useLoaderData();
    return (
        <div className="bg-[#F6F6F6]">
            <PageTitle title={'Home Page'}/>
            <Banner></Banner>
            <h1 className="text-2xl font-semibold text-center pb-10">Explore Cutting-Edge Gadgets</h1>
            <div className="w-[85%] mx-auto flex gap-5 pb-10">
                <div className="">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default HomePage;