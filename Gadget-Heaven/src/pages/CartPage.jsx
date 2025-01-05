import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, removeCart, clearCart } from "../utils/utils";
import CartCard from "../components/CartCard/CartCard";
import images from ".././assets/Group.png";
import { ProductContext } from "../layouts/MainLayout";

const CartPage = () => {
    const [product, setProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const {setProductCount, decrementProductCount } = useContext(ProductContext);

    useEffect(() => {
        const products = getAllProducts();
        setProduct(products);
    }, []);

    const handleRemove = (id) => {
        removeCart(id,decrementProductCount);
        const products = getAllProducts();
        setProduct(products);
        setProductCount(products.length);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        clearCart();  
        setProduct([]); 
        navigate("/"); 
        setProductCount(0);
    };

    const handleSortByPrice = () => {
        const sortedProducts = [...product].sort((a, b) => b.price - a.price);
        setProduct(sortedProducts);
    };

    const totalCost = product.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="bg-[#F6F6F6] py-5">
            <div className="w-[85%] mx-auto">
                <div className="flex justify-between items-center pb-5">
                    <h1 className="text-xl font-semibold">Cart</h1>
                    <div className="flex gap-3 items-center">
                        <h1 className="text-xl font-semibold">Total cost: {totalCost}k</h1>
                        <button onClick={handleSortByPrice} className="text-[#9538E2] font-semibold border-2 px-5 py-2 rounded-full border-[#9538E2]">Sort by Price</button>
                        <button 
                            onClick={handlePurchase}
                            disabled={product.length === 0 || totalCost === 0}
                            className={`text-white font-semibold px-5 py-2 border-2 border-[#9538E2] rounded-full ${
                                product.length > 0 && totalCost > 0 ? "bg-[#9538E2]" : "bg-gray-400 cursor-not-allowed"
                            }`}>
                            Purchase
                        </button>
                    </div>
                </div>
                <div className="space-y-5">
                    {product.map((products) => (
                        <CartCard handleRemove={handleRemove} key={products.product_id} products={products} />
                    ))}
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="flex flex-col items-center gap-2 justify-center bg-white p-20 rounded-lg">
                            <img className="w-1/4" src={images} alt="" />
                            <h2 className="text-3xl font-semibold">Payment successful</h2>
                            <p className="border-t pt-4">Thank you for purchasing.</p>
                            <p>Total Cost is: {totalCost}k</p>
                            <button
                                onClick={handleCloseModal}
                                className="bg-[#9538E2] text-white px-5 py-3 rounded-lg">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;