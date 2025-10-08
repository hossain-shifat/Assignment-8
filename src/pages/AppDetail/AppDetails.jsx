import { ClockFading } from 'lucide-react'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const AppDetails = () => {
    const {id} = useParams()
    const appData = useLoaderData()
    const app = appData.find(appId => appId.id === parseInt(id))

  return (
    <div>
        
    </div>
  )
}

export default AppDetails
