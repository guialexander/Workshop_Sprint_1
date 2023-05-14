import { NavLink } from 'react-router-dom'
import Temporizador from './Temporizador'
const Header = () => {
  return (
    <div className="header1">
      <nav>
        <ul>
          <li>
            <NavLink 
            to="/"
            className= {({isActive})=> isActive ? "activate1" : ""}
            > home </NavLink>
          </li>
          <li>
            <NavLink to="/productdetail"
            className= {({isActive})=> isActive ? "activate1" : ""}
            > Product Detail </NavLink>
          </li>
          <li>
            <NavLink to="/about"
            className= {({isActive})=> isActive ? "activate1" : ""}
            > About </NavLink>
          </li>
         
          
        </ul>
      </nav>
    </div>
  );
}

export default Header;