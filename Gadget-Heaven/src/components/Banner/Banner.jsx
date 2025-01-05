import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="pb-80">
            <div className="w-[95%] mx-auto relative">
                <div className="bg-[#9538E2] h-[400px] py-4 px-20 rounded-bl-xl rounded-br-xl">
                    <div className="mx-auto flex flex-col items-center gap-4">
                        <h1 className="w-[65%] text-4xl font-semibold text-white text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="w-[45%] text-xs text-gray-200 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <button onClick={()=>navigate('/dashboard')} className="px-5 py-2 bg-white text-[#9538E2] font-semibold rounded-full">Shop Now</button>
                    </div>
                </div>
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-[67%] mx-auto bg-white bg-opacity-15 border-2 border-[#F6F6F6] rounded-lg p-5">
                    <div className="h-[400px] bg-images mx-auto rounded-lg bg-cover bg-center"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;