import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousselle from '../components/Carrousselle';
import Deroulant from '../components/Deroulant';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Product = () => {

    let id = useParams()
    console.log(id)
    
    const [load, setLoad] = useState(true)
    const [productUses, setProductUses] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/properties/" + id.id, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("coucou")
                setProductUses(data)
                setLoad(false)
            })
            .catch((error) => console.log(error));
    }, []);
    if(load){
        return <div>loading ...</div>
    }
    return (
        <div>
            <Header />
            
            {
                <div>
                <Carrousselle data={productUses.pictures}/>
                <p>{productUses.title}</p>
                
                <p>{productUses.rating}</p>
                <p>{productUses.description}</p>
                
                </div>
            }

            <Deroulant data={productUses.description}/>

            
            <Footer />
        </div>
    );
};

export default Product;