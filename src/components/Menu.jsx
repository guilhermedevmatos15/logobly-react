import React from 'react';

// ? Components
import Navegation from './Navegation';

// ? CSS
import '../styles/css/Menu.css';

// ? Icons
import { HiXMark } from "react-icons/hi2";

const Menu = (props) => {

   const {sectionIds, closeMenu, className} = props;

   return (
      <div className={className}>
         <HiXMark className='icon' onClick={(e) => {closeMenu()}}/>
         <Navegation sectionIds={sectionIds} closeMenu={closeMenu}/>
      </div>
   );
}

export default Menu;