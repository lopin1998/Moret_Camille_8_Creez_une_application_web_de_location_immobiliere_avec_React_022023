import React, { useState } from 'react';
import "./Carrousselle.css"

const Carrousselle = ({ data }) => {
    const [position, setPosition] = useState(0)
    const prev = () => {
        if(position == 0){
            setPosition(data.length-1)
        }else{
            setPosition(position-1)
        }
    }
    const next = () => {
        setPosition(position+1)
        if(position == data.length-1){
            setPosition(0)
        }
    }
    return (
        <div className='styleCarrousselle'>
            <div className='count'>{position}/{data.length}</div>
            <img className='arrowBack' src="/assets/arrow_back.png" alt="" onClick={prev}/>
            <img className='imgCarrousselle' src={data[position]} alt="" />
            <img className='arrowForward' src="/assets/arrow_forward.png" alt="" onClick={next}/>
        </div>
    )
}
export default Carrousselle