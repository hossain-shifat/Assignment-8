import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { removeFromLocal, storedApp } from '../../utility/utility'
import InstalledApps from '../InstalledApps/InstalledApps'
import Swal from 'sweetalert2'
import { ChevronDown } from 'lucide-react'

const Installation = () => {
    const appData = useLoaderData()
    const [localApps,setLocalApps] = useState([])
    const [sort,setSort] = useState('')

    useEffect( () => {
        const storedAppData = storedApp()
        const convertedStoredApp = storedAppData.map(id => parseInt(id))
        const localAppList = appData.filter(app => convertedStoredApp.includes(app.id))
        setLocalApps(localAppList)
    },[])

    const handleUninstall = (id)=>{
        removeFromLocal(id)
        setLocalApps(localApps => localApps.filter(app => app.id !== id));
        Swal.fire({
            title: 'Congratulations 🎉',
            text: 'App Uninstalled!',
            icon: 'warning',
            confirmButtonText: "Confirm"
        })
}


    const handleSort = (type)=>{
        setSort(type)
        let sortList = []

        if (type === "High-Low") {
            sortList = [...localApps].sort((a,b)=>b.size - a.size)
        }

        if (type === "Low-High") {
            sortList = [...localApps].sort((a,b)=>a.size - b.size)
        }
        setLocalApps(sortList)
    }

  return (
    <div className="my-10">
        <div className="text-center space-y-4 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">Your Installed Apps</h1>
            <p className="p mx-2 md:mx-0">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between mb-5 mx-1 md:mx-0">
                <h1 className="font-bold text-xl flex justify-center items-center md:text-3xl">({localApps.length}) Apps Found</h1>
                {/* sorting */}
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 flex justify-center items-center">Sort By Size : {sort?sort:""} <ChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleSort("High-Low")}><a>High-Low</a></li>
                        <li onClick={()=>handleSort("Low-High")}><a>Low-High</a></li>
                    </ul>
                </div>
            </div>
            <div className="space-y-2">
                {
                    localApps.map(app=> <InstalledApps key={app.id} handleUninstall={handleUninstall} app={app}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Installation
