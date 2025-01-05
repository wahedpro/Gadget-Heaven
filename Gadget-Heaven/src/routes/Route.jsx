import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import DashboardPage from "../pages/DashboardPage";
import FeedbackPage from "../pages/FeedbackPage";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import WishListPage from "../pages/WishListPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: ()=> fetch ('../categories.json'),
                children:[
                    {
                        path: '/',
                        element: <ProductCard></ProductCard>,
                        loader: ()=> fetch('../productsList.json')
                    },
                    {
                        path: '/category/:category',
                        element: <ProductCard></ProductCard>,
                        loader: ()=> fetch('../productsList.json')
                    },
                ]
                
            },
            {
                path: '/statistics',
                element: <StatisticsPage></StatisticsPage>
            },
            {
                path: '/dashboard',
                element: <DashboardPage></DashboardPage>,
                children: [
                    {
                        path: '/dashboard',
                        element: <CartPage></CartPage>
                    },
                    {
                        path : '/dashboard/WishList',
                        element: <WishListPage></WishListPage>
                    }
                ]
            },
            {
                path: '/feedback',
                element: <FeedbackPage></FeedbackPage>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ()=> fetch('../productsList.json')
            }
        ]
    },
]);

export default router