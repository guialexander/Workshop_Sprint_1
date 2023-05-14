import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Productcard from '../Componentes/Productcard'
import './Styles/DetailProduct.css'
import './Styles/product.css'

export const Product_detail = () => {
  const { posts = [] } = useLoaderData()
   
 
  return (
    <div>
    <h1 className='titleDetalproducts'>Produc list</h1>
    <hr />
    <div className="container">
   
        {posts.map((item, index) => (
         
            <Productcard
            product ={item}
            key={index}
            />
            
          
        ))}
    
      </div>
      
    </div>

 
  )
}
export default Product_detail

export const loaderProducs = async () => {
  const response = await fetch('https://fakestoreapi.com/products')

  const data = await response.json()

  return { posts: data }
}

