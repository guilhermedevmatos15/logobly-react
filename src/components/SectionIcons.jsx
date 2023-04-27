import React from 'react';

// ? Components

// ? CSS
import '../styles/css/SectionIcons.css';

// ? Images

const SectionIcons = (props) => {
   const { nameSection, title01, title02, title03 } = props;

   return (
      <section className={`SectionIcons ${nameSection}`}>
         <div className="cards">
            <div className="card">
               {props.icon01}
               <p className="title">{title01}</p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
            <div className="card">
               {props.icon02}
               <p className="title">{title02}</p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
            <div className="card">
               {props.icon03}
               <p className="title">{title03}</p>
               <p>
                  Lorem ipsum dolor sit amet consectetur.
               </p>
            </div>
         </div>
      </section>
   );
};

export default SectionIcons;
