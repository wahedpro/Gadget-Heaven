
const Heading = ({title,subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 bg-[#9538E2] text-white pt-6">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="w-1/2 text-center">{subtitle}</p>
        </div>
    );
};

export default Heading;