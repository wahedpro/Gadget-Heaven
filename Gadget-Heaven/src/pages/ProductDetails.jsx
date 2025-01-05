import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Heading from "../components/Heading/Heading";
import { addToCard, addWishList, getAllWishListProducts } from "../utils/utils";
import { ProductContext } from "../layouts/MainLayout";
import PageTitle from "../components/PageTitle/PageTitle";

const ProductDetails = () => {
    const {id} = useParams();
    const data= useLoaderData();
    const [product, setProduct]= useState({});
    const { incrementProductCount} = useContext(ProductContext);

    const {product_title,product_image,price,description,specification,availability,rating}=product;
    const [isWishList, setWishList]= useState(false);
    useEffect(()=>{
        const singleData= data.find(product=> product.product_id == id);
        setProduct(singleData);
        const singleWishList = getAllWishListProducts();
        const isExist = singleWishList.find(item => item.product_id == singleData.product_id);
        if(isExist){
            setWishList(true);
        }
    },[])

    const handleAddToCart = (product)=>{
        addToCard(product,incrementProductCount);
    }

    const handleWishList = (product)=>{
        addWishList(product);
        setWishList(true);
    }

    return (
        <div className="pb-80">
            <PageTitle title={'Product Details Page'}/>
            <div className="relative">
                <Heading title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </Heading>
                <div className="bg-[#9538E2] h-[300px] py-4 px-20"></div>
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-[75%] mx-auto bg-white border-2 border-[#F6F6F6] rounded-lg p-5">
                    <div className="flex gap-5">
                        <div>
                            <img className="h-[400px] rounded-lg" src={product_image} alt="" />
                        </div>
                        <div className="flex flex-col justify-around">
                            <h1 className="text-2xl font-bold">{product_title}</h1>
                            <p className="text-xl">Price: {price}k</p>
                            <p className={`border-2 px-2 w-fit rounded-full ${availability ? 'border-[#309C08] bg-gray-200 text-[#309C08]' : 'border-[#FF0000] bg-gray-200 text-[#FF0000]'}`}>{availability ? 'In Stock' : 'Out of Stock'}</p>
                            <p>{description}</p>
                            <h3 className="font-semibold">Specification:</h3>
                            <ul>
                                {specification?.map((spec, index) => (
                                    <li className="text-gray-600" key={index}>{index+1}.{spec}</li>
                                ))}
                            </ul>
                            <h3 className="font-semibold">Rating ⭐ </h3>
                            <div className="rating flex gap-1 items-center">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" defaultChecked/>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                <p className="bg-gray-100 px-2 py-2 rounded-full">{rating}</p>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={()=>{handleAddToCart(product)}} className="py-2 px-5 bg-[#9538E2] rounded-full text-white flex gap-2 items-center hover:bg-white hover:text-[#9538E2] hover:border border-[#9538E2]">Add To Card<IoCartOutline size={20}/></button>
                                <button disabled={isWishList} onClick={()=>{handleWishList(product)}} className="bg-white px-3 py-3 border-2  rounded-full disabled:bg-red-200 hover:bg-[#9538E2] hover:text-white"><FaRegHeart/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;