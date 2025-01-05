import { useEffect, useState } from "react";
import { getAllWishListProducts, removeWishList } from "../utils/utils";
import CartCard from "../components/CartCard/CartCard";

const WishListPage = () => {
    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        const allProductToWishList = getAllWishListProducts();
        setProduct(allProductToWishList);
    }, []);

    const handleRemove = (id) => {
        removeWishList(id);
        const updatedProducts = getAllWishListProducts();
        setProduct(updatedProducts);
    };

    return (
        <div className="bg-[#F6F6F6] py-5">
            <div className="w-[85%] mx-auto">
                <h1 className="text-xl font-semibold pb-5">Wish List</h1>
                <div className="space-y-5">
                    {products.map((product) => (
                        <CartCard handleRemove={handleRemove} key={product.product_id} products={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishListPage;