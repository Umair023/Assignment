import React from 'react'
import ModuleCSS from './Center.module.css';
const Center = (props) => {
  return (
    <>
    <div className={` ${ModuleCSS.centerCSS} `} >
      
      <div className={`card ${ModuleCSS.mydiv}`} >
      <div className={`${ModuleCSS.mydivOverlay}`} style={{padding:"10px"}}>
      <h1 className=' text-white'>{props.title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo veritatis tenetur sunt temporibus ea optio omnis officiis velit incidunt ipsa voluptates quia blanditiis itaque pariatur tempora voluptatum, quod modi.</p>
      <div  className='d-flex flex-row'>
        <div className='col-3' >
          <button className='btn btn-warning' style={{borderRadius:"20px"}}>Search Setting</button>
          
        </div>
        <div className='col-4'>
        <p className={`${ModuleCSS.line}`}></p>

        <p style={{border:"1px solid white", width:"30%"}}>100KM</p>
        </div>
      </div>
      <div className='d-flex flex-row'>
        <div className='col-9'>
          <h4>Filter</h4>
          <div className='d-flex flex-row'>
            <a href="#" >Nearby</a>
            <a href="#" className={ModuleCSS.alink}  >Alphatbetical</a>
            <a href="#" className={ModuleCSS.alink} >Cash Back</a>
          </div>

        </div>
        <div>
          <button className='btn btn-warning' style={{borderRadius:"20px"}}>SHOP NOW</button>
        </div>
      </div>
      </div>
      </div>
     
    </div>
    </>
  )
}

export default Center
