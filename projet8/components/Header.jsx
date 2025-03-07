import React from 'react';
import { Link, Links } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header className='headerClass'>
                <img src="/public/assets/LOGO.png" alt="" />
                <ul>
                    <li><Link to="/Home">Acceuil</Link></li>
                    <li><Link to="/Propos">A Propos</Link></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;