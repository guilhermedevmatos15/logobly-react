import React from 'react';

// ? Components

// ? CSS
import '../styles/css/Footer.css';

// ? Images
import logo from '../assets/img/logos/logobly-website-favicon-color.png';


const Footer = (props) => {

   function updateYear() {
      const date = new Date()
      return `${date.getFullYear()}`;
   }

   return (
      <footer className='Footer'>
         <img src={logo} alt="logo logobly" />   
         <p>&copy;{updateYear()} All Rights Reserved.</p>
         <p className='developed'>Developed by <a href="https://github.com/guilhermedevmatos15" target='_blank' rel='noreferrer' title='Go to my Github'>@Guilherme Ferreira</a></p>
      </footer>
   );
}

export default Footer;