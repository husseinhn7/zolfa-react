import React, { Fragment } from 'react'
import Hero from '../components/home/hero'
import Header from '../components/layout/header'




const HomePage = () => {
  return (
    <Fragment>
        <Header />
        <Hero />
        <section className=' w-full flex items-center p-8 justify-evenly'>
          <div className=' flex items-center justify-center w-60 h-64 shadow-lg'>   1 </div>
          <div className=' flex items-center justify-center w-60 h-64 shadow-lg'>   1 </div>
          <div className=' flex items-center justify-center w-60 h-64 shadow-lg'>   1 </div>
          <div className=' flex items-center justify-center w-60 h-64 shadow-lg'>   1 </div>

        </section>
      
    </Fragment>
  )
}

export default HomePage
