import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import App from '../App/App'
import { Search } from 'lucide-react'

const Apps = () => {
    const appsData = useLoaderData()


  return (
    <div className="my-10">
        <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
            <p className="p mx-2 md:mx-0">Explore All Apps on the <br className="md:hidden"/> Market developed by us. We code for Millions</p>
        </div>
        <div className="flex justify-between flex-col md:flex-row-reverse space-y-4 max-w-[1200px] mx-auto my-5">
            <div className="flex justify-center">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search"placeholder="Search" />
                </label>
            </div>
            <h1 className="font-bold text-xl md:text-2xl pl-4 md:pl-0">({appsData.length}) Apps Found</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto mt-2">
            {
                appsData.map(appData=><App key={appData.id} appData={appData}/>)
            }
        </div>
    </div>
  )
}

export default Apps
