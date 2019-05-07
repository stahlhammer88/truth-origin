import React from 'react';
import Nav from '../Nav';
import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';

const Header = () => {        
    return (
        <Fade top delay={700}>
            <header className="header">
                <div className="wrapper wrapper--header">
                    <Link className="header__logo-link" to="/">
                        <div className="logo"></div>
                    </Link>                
                    <Nav context="header"/>
                </div>            
            </header>
        </Fade>
    );
};

export default Header;