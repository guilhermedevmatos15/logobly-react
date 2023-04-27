import React from 'react';

// ? Components

// ? CSS
import '../styles/css/Navegation.css';

// ? Images


const Navegation = (props) => {

   const {sectionIds, closeMenu} = props;

   return (
      <nav className='Navegation'>
         <ul>
            <li onClick={(e) => {closeMenu()}}><a href={`#${sectionIds[1]}`}>About</a></li>
            <li onClick={(e) => {closeMenu()}}><a href={`#${sectionIds[2]}`}>Contact</a></li>
         </ul>
      </nav>
   );
}

export default Navegation;