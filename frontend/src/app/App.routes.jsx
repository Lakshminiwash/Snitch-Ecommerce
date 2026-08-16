import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import CreateProduct from "../features/product/pages/CreateProduct";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>hello world</h1>
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
        path: "/seller/create-product",
        element:<CreateProduct/>
    }
])