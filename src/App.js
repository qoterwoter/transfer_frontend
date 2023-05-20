import React from "react";
import Header from "./components/header/Header";
import {Outlet} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
    <>
        <Header/>
        <Outlet/>
        <Toaster
            position="top-center"
        />
    </>
    )
}

export default App