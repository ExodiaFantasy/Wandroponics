"use client"
import React from 'react'
import Header from './components/Header'
import Switch from './components/Switch'
import Cards from './components/Cards'

function page() {
  return (
    <div className="bg-green-900 min-h-screen "> 
      <Header /> 
      
      {/* START */}
      <div className="bg-green-200 mt-12 py-px mx-10 rounded-xl"> 
        <Switch />
        <Cards />

        {/* START - GRAPHS */}
        <div className="bg-white text-green-900 text-center text-2xl font-extrabold py-3 mt-6 mb-8 mx-8 rounded-3xl  "> 
            graphs
        </div>
        {/* END - GRAPHS */}
      </div> {/* END */}

    </div>
  )
}

export default page