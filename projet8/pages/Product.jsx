import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousselle from '../components/Carrousselle';
import Deroulant from '../components/Deroulant';
const Product = () => {
    return (
        <div>
            <Header/>
            <Carrousselle/>
            Le produit il est la !!
            <Deroulant/>
            <Footer/>
        </div>
    );
};

export default Product;