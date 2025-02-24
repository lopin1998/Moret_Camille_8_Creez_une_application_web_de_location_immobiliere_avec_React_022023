import React, { useState } from 'react';

const Carrousselle = ({ data }) => {
    const [position, setPosition] = useState(0)
    console.log(data)
    console.log(data[position])
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
        <div>
            <div>{position}/{data.length}</div>
            <img src="/assets/arrow_back.png" alt="" onClick={prev}/>
            <img src={data[position]} alt="" />
            <img src="/assets/arrow_forward.png" alt="" onClick={next}/>
        </div>
    )
}
export default Carrousselle