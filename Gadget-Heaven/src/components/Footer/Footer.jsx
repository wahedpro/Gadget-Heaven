
const Footer = () => {
    return (
        <div className="bg-white">
            <div className="w-[80%] mx-auto text-center border-b-2 border-gray-100 pt-10 pb-5">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="w-[60%] mx-auto flex justify-between py-5">
                <div>
                    <h3 className="text-xl font-bold">Services</h3>
                    <p className="text-gray-500">Product Support</p>
                    <p className="text-gray-500">Order Tracking</p>
                    <p className="text-gray-500">Shipping & Delivery</p>
                    <p className="text-gray-500">Returns</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Company</h3>
                    <p className="text-gray-500">About Us</p>
                    <p className="text-gray-500">Careers</p>
                    <p className="text-gray-500">Contact</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Legal</h3>
                    <p className="text-gray-500">Terms of Service</p>
                    <p className="text-gray-500">Privacy Policy</p>
                    <p className="text-gray-500">Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
