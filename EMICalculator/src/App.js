import { Children, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import EmiCalculator from "./EmiCalculator";
import Timer from "./Timer";
import Header from "./Header";
import ClickCounter from "./ClickCounter";
import TicTacToe from "./TicTacToe";

const App = () =>{

    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
const route= createBrowserRouter(
    [{
        path:'/',
        element:<App/>,
        children:[
            {path:'timer', element: <Timer/>},
            {path:'emi-calculator', element: <EmiCalculator/>},
            {path:'click-counter', element: <ClickCounter/>},
            {path:'tic-tac-toe', element:<TicTacToe/>}
        ]
    }]
)
const root = ReactDOM.createRoot (document.getElementById('root'));
root.render(<RouterProvider router={route}/>)