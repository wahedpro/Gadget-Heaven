import { Link } from "react-router-dom";

const Card = ({products}) => {
    const {product_id, product_title, product_image,price} = products;
    return (
        <div className="bg-white p-3 rounded-lg space-y-3">
            <img className="w-[500px] h-[250px] rounded-lg" src={product_image} alt="" />
            <h1 className="text-xl font-semibold">{product_title}</h1>
            <p>Price:{price}k</p>
            <button className="border-2 border-[#9538E2] text-[#9538E2] px-5 py-2 rounded-full"><Link to={`/product/${product_id}`}>View Details</Link></button>
        </div>
    );
};

export default Card;