import { toast } from 'react-toastify';

// get all product form local storage
const getAllProducts = ()=>{
    const allProducts=localStorage.getItem('addProduct');
    if(allProducts){
        const addProduct = JSON.parse(allProducts);
        return addProduct;
    }else{
        return [];
    }
}

// add a product to local storage
const addToCard = (product,incrementProductCount)=>{
    const addProduct = getAllProducts();
    const isExist = addProduct.find(item => item.product_id == product.product_id);
    if(isExist) return toast.warn("is already added");
    addProduct.push(product);
    localStorage.setItem('addProduct',JSON.stringify(addProduct));
    incrementProductCount && incrementProductCount();
    toast.success("Product added to cart");
}
// remove a product form local storage
const removeCart = (id,decrementProductCount)=>{
    const addProduct = getAllProducts();
    const remaining = addProduct.filter(item => item.product_id != id);
    localStorage.setItem('addProduct',JSON.stringify(remaining));
    decrementProductCount && decrementProductCount();
    toast.warn("The product has been removed from the cart");
}
//remove the the product 
export const clearCart = () => {
    localStorage.removeItem('addProduct');
};

// WishList
// get all product form wish list local storage
const getAllWishListProducts = ()=>{
    const allWishListProducts=localStorage.getItem('wishListProduct');
    if(allWishListProducts){
        const wishListProduct = JSON.parse(allWishListProducts);
        return wishListProduct;
    }else{
        return [];
    }
}
// add a product on the wish list
const addWishList = (product)=>{
    const wishListProduct = getAllWishListProducts();
    // const isExist = wishListProduct.find(item => item.product_id == product.product_id);
    // if(isExist) return toast.warn("is already added");
    wishListProduct.push(product);
    localStorage.setItem('wishListProduct',JSON.stringify(wishListProduct));
    toast.success("Product added to Wish List");
}
// remove a product form wish list
const removeWishList = id=>{
    const addProduct = getAllWishListProducts();
    const remaining = addProduct.filter(item => item.product_id != id);
    localStorage.setItem('wishListProduct',JSON.stringify(remaining));
    toast.warn("Removed from the WishList");
}

export {addToCard, getAllProducts, removeCart, addWishList, getAllWishListProducts, removeWishList}