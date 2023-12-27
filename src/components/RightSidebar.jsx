import React from 'react'
import ModuleCSS from './RightSidebar.module.css'

const divArray=[
  {
    greaterThan:'>',
    order:'#[ORDER NUM][STORE NAME][STATUS]'
  },
  {
    greaterThan:'>',
    order:'#[ORDER NUM][STORE NAME][STATUS]'
  },
  {
    greaterThan:'>',
    order:'#[ORDER NUM][STORE NAME][STATUS]'
  },
  {
    greaterThan:'>',
    order:'#[ORDER NUM][STORE NAME][STATUS]'
  },
  {
    greaterThan:'>',
    order:'#[ORDER NUM][STORE NAME][STATUS]'
  },
]

const RightSidebar = () => {
  return (
    <div className={` ${ModuleCSS.rightSidebar} d-flex flex-row`} >
      <div style={{borderLeft:"1px solid black",height:"700px"}}></div>
      <div style={{marginLeft:"30px"}}>
      <h5 style={{color:"#FCAF17"}}>Current Orders</h5>
      {divArray.map((item)=>
        <div className='col-6 d-flex flex-row' style={{marginTop:"30px"}} >
        <div>
        <h5 style={{marginTop:"25px"}}>{item.greaterThan}</h5>
        </div>
        <div>
        <p style={{marginLeft:"15px"}}>{item.order}</p>
        </div>
      </div>
      )}
     </div>
    </div>
  )
}

export default RightSidebar
