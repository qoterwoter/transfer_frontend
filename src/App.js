import React, {useEffect, useRef, useState} from "react";
import Header from "./components/header/Header";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import {useSelector} from "react-redux";
import Footer from "./components/Footer";

const App = () => {
    const navigate = useNavigate()

    const location = useLocation()

    const user = useSelector(state => state.user)

    const [isMobile, setIsMobile] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef()

    const handleClick = (event) => {
        if(ref && ref.current && !ref.current.contains(event.target)) {
            setShowMenu(false)
        }
    }
    useEffect(() => {
        if (location.pathname.startsWith('/user') && user.status!=='Авторизован') {
            navigate('/')
        }
    },[location])


    const handleMediaQuery = mediaQuery => {
        if (mediaQuery.matches) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 875px)")
        mediaQuery.addEventListener('change', handleMediaQuery);
        handleMediaQuery(mediaQuery);

        return () => {mediaQuery.removeEventListener('change', handleMediaQuery)}
    }, [])

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [ref.current])

    useEffect(() => {
        toggleMenu()
    }, [location])

    const toggleMenu = () => {setShowMenu(!showMenu)}

    return (
    <div>
        { isMobile &&
            <div className={'burgerMenu burgerMenu_' + (showMenu ? 'hidden' : 'show') } onClick={toggleMenu}>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
            </div>}
        {!(showMenu && isMobile) &&
            <Header closeMenu={toggleMenu} isMobile={isMobile}/>
        }
        {location.pathname.endsWith('/') ? (
            <Outlet/>
            ) : (
            <main className={'main main_'+isMobile}>
                <Outlet/>
            </main>
        )}
        <Toaster
            position="top-center"
        />
    </div>
    )
}

export default App