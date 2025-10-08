import React from 'react'
import { assets } from '../../assets/assets'

const Banner = () => {
  return (
    <div className="my-10 space-y-5">
        <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold leading-10 md:leading-15">We Build <br/> <span className="text-gradient">Productive</span> Apps</h1>
            <p class="p max-w-[350px] mx-auto md:max-w-full">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className="flex justify-center items-center gap-5 font-bold">
            <div className="flex gap-2 border border-gray-300 p-2 rounded-sm cursor-pointer">
                <img className="w-[25px] h-[25px]" src={assets.playStore} alt="" />
                <a href="https://play.google.com/store/apps?hl=en">Playstore</a>
            </div>
            <div className="flex gap-2 border border-gray-300 p-2 rounded-sm cursor-pointer">
                <img className="w-[25px] h-[25px]" src={assets.appStore} alt="" />
                <a href="https://www.apple.com/app-store/">Appstore</a>
            </div>
        </div>
        <div>
            <img className="w-[550px] px-4 md:px-0 h-full mx-auto" src={assets.hero} alt="" />
        </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center py-20 grid gap-10 -mt-5">
            <h1 className="text-white text-2xl md:text-4xl font-bold">Trusted by Millions, Built for You</h1>
            <div className="flex flex-col justify-around gap-10 md:flex-row">
                <div className="space-y-2">
                    <p className="text-[#fff]/60 font-semibold">Total Downloads</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">29.6M</h1>
                    <p className="text-[#fff]/60 font-semibold">21% more than last month</p>
                </div>
                <div className="space-y-2">
                    <p className="text-[#fff]/60 font-semibold">Total Reviews</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">906K</h1>
                    <p className="text-[#fff]/60 font-semibold">46% more than last month</p>
                </div>
                <div className="space-y-2">
                    <p className="text-[#fff]/60 font-semibold">Active Apps</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">132+</h1>
                    <p className="text-[#fff]/60 font-semibold">31 more will Launch</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
