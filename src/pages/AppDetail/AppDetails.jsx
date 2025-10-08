import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { assets } from '../../assets/assets';

const AppDetails = () => {
    const {id} = useParams()
    const appData = useLoaderData()
    const app = appData.find(appId => appId.id === parseInt(id))

  return (
    <div>
        <div className="flex flex-col md:flex-row gap-5 p-4 justify-center md:justify-start md:gap-20 mx-4 max-w-[1200px] md:mx-auto my-10">
            <div className="border border-gray-100 shadow-sm p-4 rounded-xl">
                <img src={app.image} className="w-[300px] h-[300px] mx-auto rounded-xl object-cover" alt="" />
            </div>
            <div className="mt-3 pl-2 md:pl-0">
                <div className="space-y-2 border-b-2 mb-5">
                    <h1 className="font-bold text-3xl md:text-4xl">{app.title}</h1>
                    <p className="text-gray-400 font-semibold mb-4">Developed by <span class="text-gradient">{app.companyName}</span></p>
                </div>
                <div className="flex justify-around gap-10">
                    <div>
                        <img src={assets.downloadIcon} alt="" />
                        <h1>Downloads</h1>
                        <p className="font-bold text-2xl md:text-4xl">{app.downloads}</p>
                    </div>
                    <div>
                        <img src={assets.rating} alt="" />
                        <h1>Average Ratings</h1>
                        <p className="font-bold text-2xl md:text-4xl">{app.ratingAvg}</p>
                    </div>
                    <div>
                        <img src={assets.review} alt="" />
                        <h1>Total Reviews</h1>
                        <p className="font-bold text-2xl md:text-4xl">{app.reviews}</p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start items-center my-5 mt-10">
                    <button className="btn btn-prymary border-none outline-none bg-[#00D390] text-white font-bold text-md">Install Now ({app.size} MB)</button>
                </div>
            </div>
        </div>
        {/* graph */}
        <div className="m-4" >
            <hr className="mb-10 border"/>
            <div className="py-5 pl-3 font-bold text-2xl">
                <h1>Ratings</h1>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart width='100%' height={400} layout='vertical' data={[...app.ratings].reverse()}>
                        <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis type='number'/>
                            <YAxis type='category' dataKey="name"/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey='count' fill='#FF8811' barSize={20}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className="my-10 mx-4">
            <h1 className="font-bold text-2xl">Description</h1>
            <p className="p p-4">{app.description[0].des1}</p>
            <p className="p p-4">{app.description[1].des2}</p>
            <p className="p p-4">{app.description[2].des3}</p>
        </div>
    </div>
  )
}

export default AppDetails
