import React from 'react'
import TrendingApp from '../TrendingApp/TrendingApp'
import { Link } from 'react-router-dom'

const TrendingApps = ({trendingApps}) => {
  return (
    <div>
        <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold">Trending Apps</h1>
            <p class="p mx-2 md:mx-0">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto my-10">
            {
                trendingApps.map(trendingApp=><TrendingApp key={trendingApp.id} trendingApp={trendingApp}/>)
            }
        </div>
        <div className="flex justify-center items-center mb-10">
            <Link to="/apps"><button className="btn-gradient">Show All</button></Link>
        </div>
    </div>
  )
}

export default TrendingApps
