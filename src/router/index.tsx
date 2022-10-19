import {Navigate} from 'react-router-dom'
import About from "@/view/About";
import Home from "@/view/home";
import User from "@/view/User";


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
                path: "/home/user",
                element: <User/>
            },
            {
                path: "/home/about",
                element: <About/>
            },
        ]
    },


]


export default routes