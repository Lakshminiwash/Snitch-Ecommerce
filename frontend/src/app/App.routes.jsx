import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import CreateProduct from "../features/product/pages/CreateProduct";
import Dashboard from "../features/product/pages/Dashboard";
import Protected from "../features/auth/components/Protected";
import Home from "../features/product/pages/Home";
import ProductDetail from "../features/product/pages/ProductDetails";
import SellerProductDetail from "../features/product/pages/SellerProductDetail";
import AppLayout from "./AppLayout";


export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />
            },
            {
                path: "/cart",
                element: <Protected> <Cart /></Protected>
            },
            {
                path: "/seller",
                children: [
                    {
                        path: "/seller/create-product",

                        element: <Protected role="seller" >
                            <CreateProduct />
                        </Protected>
                    },
                    {
                        path: "/seller/dashboard",
                        element: <Protected role="seller" >
                            <Dashboard />
                        </Protected>
                    },
                    {
                        path: "/seller/product/:productId",
                        element: <Protected role="seller" >
                            <SellerProductDetails />
                        </Protected>
                    }
                ]
            }
        ]
    }
])
