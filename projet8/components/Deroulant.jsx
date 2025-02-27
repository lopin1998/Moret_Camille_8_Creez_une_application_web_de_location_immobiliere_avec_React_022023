import React, { useState } from 'react';
import './Deroulant.css'

const Deroulant = ({ data }) => {

    const [isDescritpionActive, setisDescritpionActive] = useState(false)
    const [isEquipementActive, setisEquipementActive] = useState(false)

    const descriptionClick = (e) => {
        setisDescritpionActive(!isDescritpionActive)
    }
    const equipementClick = (e) => {
        setisEquipementActive(!isEquipementActive)
    }

    return (
        <div>
            <div className='dropdown'>
                <p className='titleDropdown'>Descritpion<img className={isDescritpionActive ? 'arrowUp' : 'arrowDown'} onClick={descriptionClick} src='/public/assets/arrow_up.png'></img></p>
                <p className={isDescritpionActive ? 'active' : 'close'}>{data[0]}</p>
            </div>
            <div className='dropdown'>
                <p className='titleDropdown'>Equipement<img className={isEquipementActive ? 'arrowUp' : 'arrowDown'} onClick={equipementClick} src='/public/assets/arrow_up.png'></img></p>
                <p className={isEquipementActive ? 'active' : 'close'}>{data[1]}</p>
            </div>
        </div>
    );
};

export default Deroulant;