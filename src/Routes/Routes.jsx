import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetail/AppDetails";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                loader: ()=>fetch('/public/TrendingApps.json'),
                path:"/",
                Component: Home
            },
            {
                path: '/apps',
                loader: ()=>fetch('/public/AppsData.json'),
                Component: Apps
            },
            {
                path:'/installation',
                Component: Installation
            },
            {
                path: '/appDetails/:id',
                loader: ()=>fetch('/public/AppsData.json'),
                Component: AppDetails
            }
        ]
    }
])
