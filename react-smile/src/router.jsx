import React, { Component } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './App'
import About from './components/about'
import Contact from './components/contact'
import User from './components/User'


function App(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar/><Home/></>
        },
        {
            path: "/about",
            element:  <><Navbar/> <About/></>
        },
        {
            path: "/contact",
            element: <><Navbar/><Contact/></>
        },
        {
            path: "/user/:username",
            element: <><Navbar/><User/></>
        }
    ]);
    return (
        <div>
           
            <RouterProvider router={router}/>
        </div>
    )
}
export default App;