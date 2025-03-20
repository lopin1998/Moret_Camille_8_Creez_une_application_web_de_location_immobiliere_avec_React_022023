import React from 'react';
import { Link, Links } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Error.css"

const Error = () => {
    return (
        <div>
            <Header />
            <div className='styleError'>
                <p className='error404'>404</p>
                <p className='errorOups'>Oups ! La page que vous demandez n'existe pas.</p>
                <p className='goBackHome'><Link to="/Home">Retourner sur la page d'acceuil</Link></p>
            </div>
            <Footer />
        </div>
    );
};

export default Error;