import { Download, Star } from 'lucide-react'
import React from 'react'

const TrendingApp = ({trendingApp}) => {
  return (
    <div className="border border-gray-100 p-4 mx-4 lg:mx-0 shadow-sm rounded-xl cursor-pointer">
        <div>
            <img src={trendingApp.image} className="w-auto h-[280px] mx-auto rounded-xl object-cover border border-gray-100 shadow-sm" alt="" />
        </div>
        <div className="px-5 mt-4">
            <div>
                <h1 className="text-xl font-bold">{trendingApp.title}</h1>
            </div>
            <div className="flex justify-between">
                <p className="flex gap-2 items-center font-bold text-[#00D390]"><Download strokeWidth={3} size={16}/><span>{trendingApp.downloads}</span></p>
                <p className="flex gap-2 items-center font-bold p-1 bg-[#FFF0E1] px-2 text-[#FF8811] rounded-sm"><Star fill="#FF8811" stroke="#FF8811" strokeWidth={3} size={16}/><span>{trendingApp.ratingAvg}</span></p>
            </div>
        </div>
    </div>
  )
}

export default TrendingApp
