import { NavLink, useLocation } from "react-router-dom";

const Category = ({ categories }) => {
    const location = useLocation();
    

    const isDefaultCategory = location.pathname === '/category' || location.pathname === '/';

    return (
        <div role="tablist" className="tabs tabs-boxed flex flex-col gap-2 p-2 bg-white">
            {categories.map((category) => (
                <NavLink
                    to={`/category/${category.category}`}
                    role="tab"
                    key={category.id}
                    className={({ isActive }) =>
                        `tab w-[150px] h-[40px] bg-gray-300 px-5 ${isActive || (isDefaultCategory && category.category === "All Product") ? 'tab-active' : ''}`
                    }>
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Category;