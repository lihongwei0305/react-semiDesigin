import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import routes from "@/router";
let router = createBrowserRouter(routes)
let root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>

        </RouterProvider>
    </React.StrictMode>
)
