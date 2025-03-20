import React, { useEffect, useState} from 'react';
import { data, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Square.css"


const Square = () => {
    let navigate = useNavigate()

    const [jokes, setJokes] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/properties", {
        })
          .then((response) => response.json())
          .then((data) => {
            setJokes(data)
          })
          .catch((error) => console.log(error));
      }, []);
    
    const coucou = (id) => {
        console.log(id)
        navigate("../Product/"+id)
    }

    return (
        <div className='boxOfSquare'>
            {
                jokes.map(joke => (
                    <div className='squareImg'>
                    <p  onClick={() => coucou(joke.id)}>{joke.title}</p>
                    <img onClick={() => coucou(joke.id)} src={joke.cover} alt=""/>
                    </div>
                ))
            }
        </div>

    );
};

export default Square;