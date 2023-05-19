import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from "./store";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from "./App";
import Main from "./routes/Main";
import Authorization from "./routes/auth/Authorization";
import Registration from "./routes/auth/Registration";
import MakeOrder from "./routes/MakeOrder";

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path={'/'} element={<App/>}>
            <Route index element={<Main/>}/>
            <Route path={'auth'} element={<Authorization/>}/>
            <Route path={'register'} element={<Registration/>}/>
            <Route path={'order'} element={<MakeOrder/>}/>
        </Route>
    </>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
