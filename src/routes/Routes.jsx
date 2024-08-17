import Root from './../pages/Root';
import ErrorPage from './../pages/ErrorPage';
import { createBrowserRouter } from "react-router-dom";
import Products from './../pages/Products';
import Login from './../pages/Login';
import Register from './../pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: async()=> await fetch(`${import.meta.env.VITE_SERVERURL}/productscount`),
                element: <Products></Products>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;