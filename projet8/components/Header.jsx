import React from 'react';
import { Link, Links } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <img src="src/assets/react.svg" alt="" />
                <ul>
                    <li><Link to="/Home">Acceuil</Link></li>
                    <li><Link to="/Propos">A Propos</Link></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;