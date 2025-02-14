import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bandeaux from '../components/Bandeaux';
import Square from '../components/Square';
const Home = () => {
    return (
        <div>
            <Header/>
            <Bandeaux/>
            <Square/>
            <Footer/>
        </div>
    );
};

export default Home;