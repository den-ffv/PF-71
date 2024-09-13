import React from "react";

import './Note.css';

const Note = (props) => {

    const {title, text} = props;

    return (
        <div className='note'>
            <p className='note__data'>12-09-2024</p>
            <h3 className='note__title'>{title}</h3>
            <p className='note__text'>{text}</p>
        </div>
    );
}

export default Note;