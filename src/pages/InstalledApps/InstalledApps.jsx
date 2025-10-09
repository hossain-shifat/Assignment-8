import { Download, Star } from 'lucide-react'
import React from 'react'

const InstalledApps = ({app,handleUninstall}) => {
  return (
    <div className="flex gap-4 justify-between border border-gray-100 shadow-sm mx-2 p-4 rounded-xl">
        <div className="flex gap-3  ">
            <img src={app.image} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]  border border-gray-100 shadow-sm object-cover rounded-xl" alt="" />
            <div className="space-y-1">
                <div className="font-bold">
                    <h1>{app.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="flex gap-1 items-center  text-[#00D390]"><Download strokeWidth={3} size={16}/><span>{app.downloads}</span></p>
                    <p className="flex gap-2 items-center font-bold p-1 bg-[#FFF0E1] px-1 text-[#FF8811] rounded-sm"><Star fill="#FF8811" stroke="#FF8811" strokeWidth={3} size={16}/><span>{app.ratingAvg}</span></p>
                    <p className="text-[#627382]">{app.size} MB</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <button onClick={()=>handleUninstall(app.id)} className="btn btn-primary border-none outline-none font-bold shadow-none text-white bg-[#00D390]">Uninstall</button>
        </div>
    </div>
  )
}

export default InstalledApps
