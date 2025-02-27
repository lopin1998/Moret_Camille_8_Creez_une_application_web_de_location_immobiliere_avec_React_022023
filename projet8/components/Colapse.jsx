import React, {useState} from 'react';
import "./Deroulant.css"

const Colapse = ({ title, text }) => {
    const [isDataActive, setIsDataActive] = useState(false)

    const collapseClick = () => {
        setIsDataActive(!isDataActive)
    }


    return (
        <div className='dropdown'>
            <p className='titleDropdown'>{title}<img className={isDataActive ? 'arrowUp' : 'arrowDown'} onClick={collapseClick} src='/public/assets/arrow_up.png'></img></p>
            <p className={isDataActive ? 'active' : 'close'}>{text}</p>
        </div>
    );
};

export default Colapse;