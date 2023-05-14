import React from 'react'
import PropTypes from 'prop-types';
import { Link, useNavigate} from 'react-router-dom'
import './Productcard.css'

export const Productcard = (props) => {
  const {product}=props
  const {image, id, title,item}= product;
  const navegar=useNavigate();

  const handleClick=(event)=>{
    navegar(`/productdetail/${id}`)
    
 }

  return (
    <div className="Productocard">
              <div className="Productcard__image">
                        <img src={image} alt="imagen componente" />
            </div>
            <div className="Productcard__title">
               <p>{title}</p>
            </div>
           <div className="Productcard_action">
            <p>tiempo</p>
            <button className='Productcard_action--btn' onClick={handleClick}>Go TO Detail</button>
           </div>
    
    </div>
  
  )
}

export default Productcard