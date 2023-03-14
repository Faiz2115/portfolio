import React from 'react'
import Footer from './footer/Footer'
import Navbar from './header/Header'
import { Outlet } from 'react-router-dom'
import BackToUpButton from './backToUp/BackToUpButton'
import ScrollToTop from './scrollToTop/ScrollToTop'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <BackToUpButton />
            <ScrollToTop/>
            <Footer />

        </>
    )
}

export default Layout