import React from 'react'
import ModuleCSS from './Leftsidebar.module.css';
const Leftsidebar = () => {
  return (
    <>
    <div className={`d-flex flex-row  bg-black ${ModuleCSS.mainleftBarCSS}`} >
    <div className={`  ${ModuleCSS.leftsideCSS} col-7 `}>
      <p className={`${ModuleCSS.p}`}>WELCOME BACK</p>
      <h5 style={{color:"#F4F5F1"}}>Hannah</h5>
      <p className={`${ModuleCSS.p}`}>ADDRESS</p>
      <button className={`${ModuleCSS.button} `}>123 ABC ST^</button>
      <p style={{color:"#FCAF17"}}>+ADD ADDRESS</p>
      <div style={{marginTop:"250px"}}>
        <p style={{color:"#FCAF17"}}>MORE OPTIONS</p>
        <p>Profile Settings</p>
        <p>MY ORDERS</p>
        <p>Earnings</p>
        <p>FAQ</p>
        <p>Partner Program</p>
        <p>Contect Us</p>
        <p>Log Out</p>
      </div>
    </div>
    <div className={`col-4 ${ModuleCSS.secLeftBar}`}>
     <p>BALANCE $79.87</p>
    </div>
    </div>
    </>
  )
}

export default Leftsidebar
