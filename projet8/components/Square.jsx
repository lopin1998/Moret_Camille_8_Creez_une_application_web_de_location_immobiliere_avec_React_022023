import React, { useEffect, useState} from 'react';
import { data, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
        <div>
            {
                jokes.map(joke => (
                    
                    <button onClick={() => coucou(joke.id)}>{joke.title}
                    <img src={joke.cover} alt="" /></button>
                ))
            }
        </div>

    );
};

export default Square;