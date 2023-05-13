import React from 'react'
import PropTypes from 'prop-types';
import './Productcard.css'

export const Productcard = (props) => {
  const {product}=props
  const {image, id, title}= product;

  return (
   <>
    <article className ="Productocard">
    <div className="Productocard__Imagen">
      <img
      src={image}
      alt="Blue Footprint Guy"
      />
    </div>
    <div className="Productocard_Content">
      <p>{title}</p>

    </div>
    <div className="Productocard_hora_btn">
      <p>{id}</p>
      <button className='btn'>Go TO Detail</button>

    </div>

      
        
  </article>
   </>
  )
}

export default Productcard