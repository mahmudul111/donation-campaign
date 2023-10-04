import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import Error from "../ErrorElements/Error";
import CardDetails from "../CardDetails/CardDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=>fetch('/donations.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/cards/:id",
                element: <CardDetails></CardDetails>,
                loader: ()=>fetch('/donations.json')
            }

        ]
    },  
    ]);

export default router;