import React from 'react';
import {Link} from "react-router-dom";

import {menuItems} from "../utils/menu.ts";
import Clock from "./Clock.tsx";

import "./MobileMenu.css";

const MobileMenu = (props) => {
    return (
        <>
            <ul className={`mobile__list ${props.active ? 'active' : ''}` }>
                {menuItems.map((item) => (
                    <Link className='mobile__link' to={item.path} key={item.id}>{item.value}</Link>
                ))}
            </ul>
        </>
    );
};

export default MobileMenu;