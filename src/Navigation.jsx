import React, { useState } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"


function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <Link to="/home" className="site-title">ParkPay</Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <CustomLink to="/airtime" className='nav1'>
                    Airtime & Data
                </CustomLink>
                <CustomLink to="/send" className='nav2'>
                    Send Money
                </CustomLink>
                <CustomLink to="/pay" className="nav3">
                    Pay Bills
                </CustomLink>
                 <div className="sign-btn">
                <Link to="/sign-up" id="1" className="btn" >
                    <p className="spc">Sign Up</p>
                </Link>
                </div>
            </ul>
           
        </nav>


    )
}





function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0)
})

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('glass', window.scrollY > 0)
})


window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-text-color', window.scrollY === 640)
})

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('glass1', window.scrollY === 900)
})



export default Navigation;