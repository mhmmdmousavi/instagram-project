import { createBrowserRouter } from "react-router";
import {Home, Login, Profile, SignUp, User, } from "./components/pages";


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
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
]) 