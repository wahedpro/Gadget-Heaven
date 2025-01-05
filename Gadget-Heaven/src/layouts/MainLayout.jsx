import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../utils/utils";

export const ProductContext = createContext();


const MainLayout = () => {
    const [productCount, setProductCount] = useState(0);
    useEffect(() => {
        const products = getAllProducts();
        setProductCount(products.length);
    }, []);

    const incrementProductCount = () => {
        setProductCount(prevCount => prevCount + 1);
    };

    const decrementProductCount = () => {
        setProductCount(prevCount => Math.max(prevCount - 1, 0));
    };

    return (
        <div>
            <ProductContext.Provider value={{ productCount, setProductCount, incrementProductCount, decrementProductCount}}>
                <Navbar ></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ProductContext.Provider>
        </div>
    );
};

export default MainLayout;