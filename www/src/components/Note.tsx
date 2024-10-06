type Note = {
    title: string;
    content: string;
    createdAt: Date;
  }

import './Note.css';
import { formatData } from "../assets/formatData";

const Note = (props: Note) => {

    const {title, content, createdAt} = props;

console.log(createdAt);


    return (
        <div className='note'>
            <p className='note__data'>{formatData(createdAt.toString())}</p>
            <h3 className='note__title'>{title}</h3>
            <p className='note__text'>{content}</p>
        </div>
    );
}

export default Note;