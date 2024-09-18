import React from "react";


const Work = (props) => {

      const {title, text, img} = props;

      return (
          <div className='note'>
              <img className='work__img' style={{borderRadius: 10}} src={img} alt={title}/>
              <h3 className='note__title' style={{margin: '20px 0'}}>{title}</h3>
              <p className='note__text'>{text}</p>
          </div>
      );
}

export default Work;