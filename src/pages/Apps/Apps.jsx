import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import App from '../App/App'
import { assets } from '../../assets/assets'
import AppError from '../AppError/AppError'
import Loader from '../../components/Loader/Loader'


const Apps = () => {
    const appsData = useLoaderData()
    const [search,setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // get search info
    const handleSearch = (e) => {
        setSearch(e.target.value)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }

    // search functionality
    const searchedApp = appsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))

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
                    <input type="search" onChange={handleSearch} defaultValue={search} placeholder="Search" />
                </label>
            </div>
            <h1 className="font-bold text-xl md:text-2xl pl-4 md:pl-0">({searchedApp.length}) Apps Found</h1>
        </div>
        {
            isLoading?(
                <div className="flex justify-center items-center">
                    <Loader/>
                </div>
            ):(
            searchedApp.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 md:max-w-[950px] lg:max-w-[1200px] mx-auto mt-2">
                    {
                        searchedApp.map(appData => <App key={appData.id} appData={appData}/>)
                    }
                </div>
            ) : (
                <div className="col-span-full">
                    <AppError setSearch={setSearch}/>
                </div>
            )
        )}
    </div>
  )
}

export default Apps
