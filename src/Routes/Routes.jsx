import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetail/AppDetails";
import AppError from "../pages/AppError/AppError";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                loader: ()=>fetch('/AppsData.json').then(res=>res.json()),
                Component: Home
            },
            {
                path: '/apps',
                loader: ()=>fetch('/AppsData.json').then(res=>res.json()),
                Component: Apps
            },
            {
                path:'/installation',
                loader: ()=>fetch('/AppsData.json'),
                Component: Installation
            },
            {
                path: '/appDetails/:id',
                loader: ()=>fetch('/AppsData.json'),
                errorElement:<AppError/>,
                Component: AppDetails
            }
        ]
    }
])
