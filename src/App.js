import React from "react";
import Header from "./components/Header";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
    <>
        <Header/>
        <main className="main">
            <Outlet/>
        </main>
    </>
    )
}

export default App