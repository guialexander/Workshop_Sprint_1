import React, { useRef } from "react";
import PropTypes from 'prop-types';
import Countdown from 'react-countdown'
import { Link, useNavigate} from 'react-router-dom'
import './Temporizador.css'

export const Temporizador = (props) => {
    const {product} =props
    const {id}=product
    const numId=parseInt(id)
    let Ntempo=0;
    
   /* if(numId%2 ==0){
        Ntempo=59000*3;
    }else{
        Ntempo=59000;
    }*/  //para colocar tiempo de un min o tres min si es o no par 

    const random= Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    Ntempo=random*59000; // se asigna funcion random del 1 al 20 para el contador 
       
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
          return <div className="Temporizadorcard">
            <div className="Temporizadorcard--span">
            <span>{hours}:{minutes}:{seconds}</span>
            </div>
            <div className="Temporizadorcard--btn">
            <button className='Productcard_action--btn' onClick={handleClick}>Go TO Detail</button>
            </div>
            </div>
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