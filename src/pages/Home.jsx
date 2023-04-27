import React, { useState } from 'react';

// ? Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionDefault from '../components/SectionDefault';
import SectionIcons from '../components/SectionIcons';
import Menu from '../components/Menu';

// ? CSS
import '../styles/css/Home.css';

// ? Images
import illustration01 from '../assets/img/undraw_coolness_re_sllr.svg';
import illustration02 from '../assets/img/undraw_maker_launch_re_rq81.svg';
import illustration03 from '../assets/img/undraw_upgrade_re_gano.svg';

// ? Icons
import TimerIcon from '../components/icons/TimerIcon';
import PeopleFillIcon from '../components/icons/PeopleFillIcon';
import RocketIcon from '../components/icons/RocketIcon';
import LegoIcon from '../components/icons/LegoIcon';
import FontIcon from '../components/icons/FontIcon';
import LightningIcon from '../components/icons/LightningIcon';


const Home = (props) => {

   const [sectionIds] = useState([
      'section-main',
      'section-launch',
      'section-save'
   ]);
   const [menuActive, setMenuActive] = useState(false);

   function handleClickIconMenu() {
      setMenuActive(!menuActive);
   }

   function closeMenu() {
      setMenuActive(false);
   }

   return (
      <div className="Home">
         <Header sectionIds={sectionIds} handleClickIconMenu={handleClickIconMenu} closeMenu={closeMenu}/>
         <SectionDefault
            nameSection={sectionIds[0]}
            imageSrc={illustration01}
            imageAlt="illustration"
            invertedSection={false}
         >
            <h2>Get an amazing logo<br />for your startup in<br />60 seconds</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, magnam!</p>
            <form>
               <input type="email" placeholder='Enter your email' />
               <button type='button' className='b-notify'>Notify Me</button>
            </form>
         </SectionDefault>

         <SectionIcons 
            nameSection='cardsIcons'
            title01='Real logos. Real fast.'
            title02='Do it yourself and save'
            title03='Get website -ready logos'
            icon01={<TimerIcon />}
            icon02={<PeopleFillIcon />}
            icon03={<RocketIcon />}
         />

         <SectionDefault
            nameSection={sectionIds[1]}
            imageSrc={illustration02}
            imageAlt='illustration'
            invertedSection={true}
         >
            <h2>Launch your website<br />faster with a new<br />logo from Logobly</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, magnam!</p>
         </SectionDefault>

         <SectionIcons 
            nameSection='cardsIcons'
            title01='Ease to use'
            title02='Quality fonts'
            title03='Quality icons'
            icon01={<LegoIcon />}
            icon02={<FontIcon />}
            icon03={<LightningIcon />}
         />

         <SectionDefault
            nameSection={sectionIds[2]}
            imageSrc={illustration03}
            imageAlt="illustration"
            invertedSection={false}
         >
            <h2>Save time.<br />Save Money<br />Do it your way</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, magnam! Lorem ipsum dolor sit amet.</p>
            <form>
               <input type="email" placeholder='Enter your email' />
               <button type='button' className='b-notify'>Notify Me</button>
            </form>
         </SectionDefault>

         <Footer />



         {/* Modal's */}
         {/* {menuActive &&
            <Menu sectionIds={sectionIds} closeMenu={closeMenu}/>
         } */}
         <Menu sectionIds={sectionIds} closeMenu={closeMenu} className={`Menu ${menuActive ? '' : 'disable'}`}/>
      </div>
   );
};

export default Home;
