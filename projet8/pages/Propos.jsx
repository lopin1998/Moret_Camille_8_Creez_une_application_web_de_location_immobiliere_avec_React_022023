import React, { useState } from 'react';
import Header from '../components/Header';
import Bandeaux from '../components/Bandeaux';
import Footer from '../components/Footer';
import Colapse from '../components/Colapse';
import './Propos.css'


const Propos = () => {

    return (
        <div>
            <Header />
            <img className='bandeauxClassPropos' src="/assets/IMG-BandeauxPropos.png" alt="" />
            <div className='proposStyle'>
                <Colapse title={"Fiabilité"} text={"Les annnonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logement, et toutes les information sont régulièrement vérifiées pas nos équipes."} />
                <Colapse title={"Respect"} text={"La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de pertuerbation du voisinage entraînera une exclusion de notre plateforme."} />
                <Colapse title={"Service"} text={"La quelité du service est aux coeur de notre engagement chhez Kasa. Nous veillons à ca que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienvaillance."} />
                <Colapse title={"Sécurité"} text={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis pas nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à os équipes de verifier que les standars sont bien respectés. Nous organisons également des ateliers sur la securité domestique pour nos hôtes."} />
            </div>
            <Footer />
        </div>
    );
};

export default Propos;