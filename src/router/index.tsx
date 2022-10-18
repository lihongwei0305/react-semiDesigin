import { Navigate } from 'react-router-dom'
import About from "@/view/About";
import Home from "@/view/home";




const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },



]


export default routes