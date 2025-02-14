import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousselle from '../components/Carrousselle';
import Deroulant from '../components/Deroulant';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Product = () => {

    let id = useParams()
    console.log(id.id)

    const [productUses, setProductUses] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/properties/" + id.id, {
        })
            .then((response) => response.json())
            .then((data) => {
                setProductUses(data)
                console.log(data)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Header />
            
            {
                <div>
                <p>{productUses.title}</p>
                <a href=""><img src={productUses.cover} alt=""/></a>
                <p>{productUses.rating}</p>
                <p>{productUses.description}</p>
                </div>
            }



            
            <Footer />
        </div>
    );
};

export default Product;