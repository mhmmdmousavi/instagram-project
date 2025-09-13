import { createBrowserRouter } from "react-router";
import {Home, Profile, User, } from "./components/pages";


export const routes = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/user',
        element: <User/>
    },
    {
        path: '/profile',
        element: <Profile/>
    }
]) 