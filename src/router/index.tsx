import {Navigate} from 'react-router-dom'
import About from "@/view/About";
import Home from "@/view/home";
import User from "@/view/User";
import Active from "@/view/Active";
import HomePage from "@/view/HomePage";


const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home/>,
        children: [
            {
                path: "/home/homePage",
                element: <HomePage/>
            },
            {
                path: "/home/user",
                element: <User/>
            },
            {
                path: "/home/about",
                element: <About/>
            },
            {
                path: "/home/active",
                element: <Active/>
            },
        ]
    },


]


export default routes