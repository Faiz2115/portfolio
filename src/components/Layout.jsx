import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import BackToUpButton from '../components/BackToUpButton'
import ScrollToTop from '../components/ScrollToTop'

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