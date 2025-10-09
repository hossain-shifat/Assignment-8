import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const AppError = ({setSearch}) => {
  return (
    <div className="grid justify-center items-center m-4 md:m-0 p-5">
        <div>
            <img src={assets.appError} className="mx-auto" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center mt-4 text-center space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl">OPPS!! <br className="md:hidden"/> APP NOT FOUND</h1>
            <p className="p">The App you are requesting is not found on our system.  please try another apps</p>
        </div>
        <div className="flex justify-center items-center mt-4">
            <Link to="/apps"><button onClick={()=>setSearch('')} className="btn-gradient">Go Back!</button></Link>
        </div>
    </div>
  )
}

export default AppError
