import React from 'react'
import { assets } from '../../assets/assets'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white p-5 md:p-10 grid gap-5">
        <div className="flex justify-between">
            <div className="flex justify-center items-center">
                <Link to='/'>
                    <div className="flex gap-2 justify-center items-center font-bold">
                        <img className="w-[30px] h-[30px]" src={assets.logo} alt="" />
                        <h1 className="text-gradient">HERO.IO</h1>
                    </div>
                </Link>
            </div>
            <div className="space-y-2">
                <h1>Social</h1>
                <div className="flex gap-2">
                    <Twitter/>
                    <Linkedin/>
                    <Facebook/>
                </div>
            </div>
        </div>
        <hr/>
        <div className="text-center">
            <h1>Copyright © 2025 - All right reserved</h1>
        </div>
    </div>
  )
}

export default Footer
