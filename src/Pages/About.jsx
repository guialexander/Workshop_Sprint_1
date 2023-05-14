import React from 'react'
import foto from '../assets/foto.jpg'


export const About = () => {
  
  return (
    <ul>
      <li> <strong>Nombre:</strong> Nombre: Guillermo Alexander Herrera R.</li>
      <li><strong>Descripción:</strong></li>
      <li><strong>Image:</strong> <img src={foto} alt="foto personal" /></li>
      <li><strong>Tres cosas que hemos aprendido del programa:</strong>
      <br />
        <ul>
        <br />
          <li>Hemos aprendido a realizar proyectos en React, html con css y java script</li>
          <br />
          <li>A manejar git y git hub</li>
          <br />
          <li>Agilizar el aprendizaje para ser desarrollador web</li>
          <br />
        </ul>
      </li>
      <li><strong>Email:</strong>guialexander@gmail.com</li>
      <li><strong>Github:</strong>  Guialexander</li>
    </ul>
  )
}

export default About