import React from 'react'
import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa'

const Icons=({name})=> {
  switch(name){
      case "circle":
          return <FaRegCircle className="icons" size="lg" style={{color:'white'}}/>;
       case "cross":
          return <FaTimes className="icons" size="lg" style={{color:'white'}}/>;
       default:
           return <FaPen className="icons"/>;
  
  };
    
}
export default Icons;
