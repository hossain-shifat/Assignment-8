import React from 'react'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div className="my-10 space-y-5">
        <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold leading-10 md:leading-15">We Build <br/> <span className="text-gradient">Productive</span> Apps</h1>
            <p class="p">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className="flex justify-center items-center gap-5">
            <div className="flex gap-2 border border-gray-50 p-2 rounded-sm cursor-pointer">
                <img className="w-[25px] h-[25px]" src={assets.playStore} alt="" />
                <h1>Playstore</h1>
            </div>
            <div className="flex gap-2 border border-gray-50 p-2 rounded-sm cursor-pointer">
                <img className="w-[25px] h-[25px]" src={assets.appStore} alt="" />
                <h1>Appstore</h1>
            </div>
        </div>
        <div>
            <img className="max-w-[550px] h-full mx-auto" src={assets.hero} alt="" />
        </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center py-20 -mt-5">
            <h1 className="text-white text-2xl md:text-4xl font-bold">Trusted by Millions, Built for You</h1>
            <div className="grid md:grid-cols-3">
                <div>
                    <p className="text-[#fff]/60 font-semibold">Total Downloads</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">29.6M</h1>
                    <p className="text-[#fff]/60 font-semibold">21% more than last month</p>
                </div>
                <div>
                    <p className="text-[#fff]/60 font-semibold">Total Reviews</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">906K</h1>
                    <p className="text-[#fff]/60 font-semibold">46% more than last month</p>
                </div>
                <div>
                    <p className="text-[#fff]/60 font-semibold">Active Apps</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">132+</h1>
                    <p className="text-[#fff]/60 font-semibold">31 more will Launch</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
