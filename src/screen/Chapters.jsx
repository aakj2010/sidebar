import React from 'react'
import './Chapters.css'
// import bg from '../Assets/bg.svg'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
// import Footer from '../layout/Footer'

function Chapters() {
    return (
        <>
            <div className='chapters'> 
                <Footer />
                <Outlet />
            </div>
        </>
    )
}

export default Chapters