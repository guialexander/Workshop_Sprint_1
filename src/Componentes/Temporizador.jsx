import React, { useRef } from "react";
import PropTypes from 'prop-types';
import Countdown from 'react-countdown'
import { Link, useNavigate} from 'react-router-dom'

export const Temporizador = (props) => {
    const {product} =props
    const {id}=product
    const numId=parseInt(id)
    let Ntempo=0;
    
    if(numId%2 ==0){
        Ntempo=59000*3;
    }else{
        Ntempo=59000;
    }
       
const Completionist = () => <span>Time is up! purchase for this product</span>;  
const navegar=useNavigate();

const handleClick=(event)=>{
    navegar(`/productdetail/${id}`)
    
 }
 const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <>
            <span>{hours}:{minutes}:{seconds}</span>
            <button className='Productcard_action--btn' onClick={handleClick}>Go TO Detail</button>
            </>
        }
      };
  
    
return (
  <div>
    <Countdown
      date={Date.now() + Ntempo}
      renderer={renderer}
    />
   
  </div>
);
   
 
}
export default Temporizador