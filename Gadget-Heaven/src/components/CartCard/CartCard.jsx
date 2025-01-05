import { TiDeleteOutline } from "react-icons/ti";

const CartCard = ({products, handleRemove}) => {
    const {product_id, product_title, product_image,price , description} = products;
    return (
        <div className="flex gap-5 bg-white p-5 rounded-lg space-y-3 relative">
            <img className="w-[180px] h-[150px] rounded-lg" src={product_image} alt="" />
            <div className="flex flex-col justify-evenly">
                <h1 className="text-xl font-semibold">{product_title}</h1>
                <p>{description}</p>
                <p>Price:{price}k</p>
            </div>
            <div>
                <button onClick={()=>handleRemove(product_id)} className="text-red-500 absolute top-3 right-5"><TiDeleteOutline size={35}/></button>
            </div>
        </div>
    );
};

export default CartCard;