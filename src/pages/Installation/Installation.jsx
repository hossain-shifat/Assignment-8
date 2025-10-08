import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { storedApp } from '../../utility/utility'
import InstalledApps from '../InstalledApps/InstalledApps'

const Installation = () => {
    const [localApps,setLocalApps] = useState([])
    const appData = useLoaderData()


    useEffect( () => {
        const storedAppData = storedApp()
        const convertedStoredApp = storedAppData.map(id=> parseInt(id))
        const localAppList = appData.filter(app=>convertedStoredApp.includes(app.id))
        setLocalApps(localAppList)

    },[])


  return (
    <div className="my-10">
        <div className="text-center space-y-4 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">Your Installed Apps</h1>
            <p className="p mx-2 md:mx-0">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="max-w-[1200px] mx-auto">
            <h1 className="font-bold text-2xl mb-5 md:text-3xl pl-2">({localApps.length}) Apps Found</h1>
            <div className="space-y-2">
                {
                    localApps.map(app=> <InstalledApps key={app.id} app={app}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Installation
