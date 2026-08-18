import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import CreateProduct from "../features/product/pages/CreateProduct";
import Dashboard from "../features/product/pages/Dashboard";
import Protected from "../features/auth/components/Protected";
import Home from "../features/product/pages/Home";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/seller",
        children : [ 
            {
                path: "/seller/create-product",
                element: <Protected role = "seller">
                    <CreateProduct />
                </Protected>
            },
            {
                path: "/seller/dashboard",
                element: <Protected role="seller">
                     <Dashboard />
                </Protected>
            }
        ]
    }
])
