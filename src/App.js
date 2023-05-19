import React from "react";
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
    <>
        <Header/>
        <main className="main">
            <Outlet/>
        </main>
        <Toaster
            position="top-center"
        />
    </>
    )
}

export default App