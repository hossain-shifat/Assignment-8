import React, { Suspense } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'

const Root = () => {
    const navigation = useNavigation()
  return (
    <div>
        <Navbar/>
        {navigation.state !== 'idle' && <Loader/>}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root
