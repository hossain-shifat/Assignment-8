import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("menu")
  return (
    <div className="navbar lg:px-10 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            {/* mobile view */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-3 text-[1rem] font-medium shadow">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><li>Home</li></Link>
                <Link to='/apps' onClick={()=>setMenu("apps")} className={menu==="apps"?"active":""}><li>Apps</li></Link>
                <Link to='/installation' onClick={()=>setMenu("installation")} className={menu==="installation"?"active":""}><li>Installation</li></Link>
            </ul>
            </div>
            <Link to="/">
                <div className="flex gap-2 justify-center items-center font-bold cursor-pointer">
                    <img className="w-[30px] h-[30px]" src={assets.logo} alt="" />
                    <h1 className="text-gradient">HERO.IO</h1>
                </div>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            {/* large screen view */}
            <ul className="menu menu-horizontal px-1 gap-10">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><li>Home</li></Link>
                <Link to='/apps' onClick={()=>setMenu("apps")} className={menu==="apps"?"active":""}><li>Apps</li></Link>
                <Link to='/installation' onClick={()=>setMenu("installation")} className={menu==="installation"?"active":""}><li>Installation</li></Link>
            </ul>
        </div>
        <div className="navbar-end">
            <button><a className="btn-gradient" href="https://github.com/hossain-shifat"><Github/> Contribute</a></button>
        </div>
    </div>
  )
}

export default Navbar
