import React from 'react';

// ? Components
import Navegation from './Navegation';

// ? CSS
import '../styles/css/Header.css';

// ? Images
import logo from '../assets/img/logos/logobly-high-resolution-logo-color-on-transparent-background.png';

// ? Icons
import { FaBars } from "react-icons/fa";


const Header = (props) => {

   const {sectionIds, handleClickIconMenu, closeMenu} = props;

   return (
      <header className='Header'>
         <img src={logo} alt="logo logobly" />
         <Navegation sectionIds={sectionIds} closeMenu={closeMenu}/>
         <FaBars
            className='icon' 
            onClick={(e) => {handleClickIconMenu()}}
         />
      </header>
   );
}

export default Header;