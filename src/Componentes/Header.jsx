import { NavLink } from 'react-router-dom'
import Temporizador from './Temporizador'
import './Header.css'
const Header = () => {
  return (
    <div className="header1">
      <nav className='nav__container'>
        <ul className='nav-links'>
          <li>
            <NavLink 
            to="/"
            className= {({isActive})=> isActive ? "activate1" : "normaliza"}
            > Home </NavLink>
          </li>
          <li>
            <NavLink to="/productdetail"
            className= {({isActive})=> isActive ? "activate1" : "normaliza"}
            > Product Detail </NavLink>
          </li>
          <li>
            <NavLink to="/about"
            className= {({isActive})=> isActive ? "activate1" : "normaliza"}
            > About </NavLink>
          </li>
         
          
        </ul>
      </nav>
    </div>
  );
}

export default Header;