import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousselle from '../components/Carrousselle';
import Colapse from '../components/Colapse';
import { data, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Product.css"


const Product = () => {

    let id = useParams()

    const [load, setLoad] = useState(true)
    const [productUses, setProductUses] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/properties/" + id.id, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProductUses(data)
                setLoad(false)
            })
            .catch((error) => console.log(error));
    }, []);
    if (load) {
        return <div>loading ...</div>
    }

    return (
        <div className='productStyle'>
            <Header />

            {
                <div>
                    <Carrousselle data={productUses.pictures} />
                    <p className='productTitle'>{productUses.title}</p>
                    <p className='productLocation'>{productUses.location}</p>
                    <div>
                        {
                            productUses.tags.map(joke => (
                                <p className='productTags'>{joke}</p>
                            ))
                        }
                    </div>
                    {/* <p className='productTags'>{productUses.tags}</p> */}
                    <div>
                        <img src={productUses.host.picture} alt="" />
                        <p>{productUses.host.name}</p>
                    </div>
                    <p>{productUses.rating}</p>
                    <div className='productCollapse'>
                        <Colapse title={"Déscription"} text={productUses.description} />
                        <Colapse title={"Equipement"} text={productUses.equipments} />
                    </div>
                </div>
            }

            <Footer />
        </div>
    );
};

export default Product;