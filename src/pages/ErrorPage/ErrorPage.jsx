import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="grid justify-center items-center m-4 md:m-0 p-5">
        <div>
            <img src={assets.pageError} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl">Oops, page not found!</h1>
            <p class="p">The page you are looking for is not available.</p>
            <Link to="/"><button className="btn-gradient">Go Back!</button></Link>
        </div>
    </div>
  )
}

export default ErrorPage
