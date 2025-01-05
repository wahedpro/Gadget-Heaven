import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const ProductCard = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (!category || category === "All Product") {
            setProduct(data);
        } else {
            const filterByCategory = data.filter(prod => prod.category === category);
            setProduct(filterByCategory);
        }
    }, [data, category]);

    return (
        <div className="grid grid-cols-3 gap-3 px-2">
            {product.map(products => (
                <Card key={products.product_id} products={products} />
            ))}
        </div>
    );
};
export default ProductCard;