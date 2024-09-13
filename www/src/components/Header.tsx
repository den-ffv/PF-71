import React from 'react';
import {Link} from "react-router-dom";

import {menuItems} from "../utils/menu.ts";
import Clock from "./Clock.tsx";

import './Header.css'
import MobileMenu from "./MobileMenu.tsx";


const Header = () => {

    const [isActive, setIsActive] = React.useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    React.useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 900) {
                setIsActive(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    return (
        <div className='header'>
            <Link to='/' className='logo'></Link>
            <ul className='header__list'>
                {menuItems.map((item) => (
                    <Link className='header__link' to={item.path} key={item.id}>{item.value}</Link>
                ))}
            </ul>
            <Clock/>
            <div className={`burger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <MobileMenu active={isActive} setActive={toggleMenu}/>
        </div>
    );
};

export default Header;