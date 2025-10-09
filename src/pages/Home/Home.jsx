import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import TrendingApps from '../TrendingApps/TrendingApps'


const Home = () => {
    const allApps = useLoaderData()
    const trendingApps = allApps.slice(0,8)

  return (
    <div>
        <Banner/>
        <TrendingApps className="mx-10" trendingApps={trendingApps}/>
    </div>
  )
}

export default Home
