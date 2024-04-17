import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
// import Login from "../pages/Login";
import Register from "../pages/Register";
import Login from "../pages/Login";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Orders from "../pages/Orders";
// import './index.css'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/residential/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: () => fetch('/residential.json'),
                // children: [
                //     {
                //         index: true,
                //         element: <Orders></Orders>
                //     }
                // ]
            },
            {
                path: '/update',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },
]);

export default router;