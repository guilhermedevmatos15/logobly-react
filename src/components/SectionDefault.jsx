import React from 'react';

// ? Components

// ? CSS
import '../styles/css/SectionDefault.css';

// ? Images


const SectionDefault = (props) => {

   const {nameSection, imageSrc, imageAlt, invertedSection} = props;

   function sectionRender() {
      return (
         <>
            <div className='image'>
               <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className='content'>
               {props.children}
            </div>
         </>
      );
   }

   function invertedSectionRender() {
      return (
         <>
            <div className='content'>
               {props.children}
            </div>
            <div className='image'>
               <img src={imageSrc} alt={imageAlt} />
            </div>
         </>
      );
   }

   return (
      <section className={`SectionDefault s-${nameSection} ${invertedSection ? 'inverted' : 'default'}`} id={nameSection}>
         {invertedSection ? invertedSectionRender() : sectionRender()}
      </section>
   );
}



export default SectionDefault;