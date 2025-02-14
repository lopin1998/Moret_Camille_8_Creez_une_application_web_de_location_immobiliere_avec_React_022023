import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'


const Square = () => {
    const [jokes, setJokes] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/properties", {
        })
          .then((response) => response.json())
          .then((data) => {
            setJokes(data)
            console.log(data);
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <div>
            L'image de la maison
            <Link to='/Product'>Le titre de la maison</Link>
            {
                jokes.map(joke => (
                    
                    <Link to='/Product'>{joke.title}
                    <img src={joke.cover} alt="" /></Link>
                ))
            }
        </div>

    );
};

export default Square;