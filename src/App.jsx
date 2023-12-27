import React from 'react'
import Header from './components/Header'
import Leftsidebar from './components/Leftsidebar'
import Center from './components/Center'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <>
    <Header/>
    <div className='d-flex flex-row '>
      
       <div className='col-sm-2'>
      <Leftsidebar/>
      </div>
      
      <div className='col-md-7 col-sm-6'>
      <h3 style={{color:"#20262C", marginLeft:"20px"}}>Dashboard</h3>
      <Center title="MARKETPLACE"/>
      <Center title="TAKEOUT"/>
      <Center title="GROCERY"/>
      </div>
      
       <div className='col-md-3 col-sm-2'>
      <RightSidebar />
      </div>
      
    </div>
    </>
  )
}

export default App
