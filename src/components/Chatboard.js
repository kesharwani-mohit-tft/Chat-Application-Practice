import React from 'react'
import LeftComponent from './LeftComponent'
import Navbar from "./Navbar";
import RightComponent from "./RightComponent";

const Chatboard = ({socket}) => {
  return (
    <>

<div style={{ overflowY: "hidden" }}>    
      <Navbar />
      <div className="lowerComponent">
        <LeftComponent/>
        <RightComponent socket={socket}/>                
      </div>
     
    </div>
    </>
  )
}

export default Chatboard