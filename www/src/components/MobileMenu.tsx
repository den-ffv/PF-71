import React from 'react';
import {Link} from "react-router-dom";

import {menuItems} from "../utils/menu.ts";
import Clock from "./Clock.tsx";

import "./MobileMenu.css";

const MobileMenu = (props) => {
    return (
        <>
            <div className={`mobile ${props.active ? 'active' : ''}` }>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Clock/>
                </div>
                <div className='mobile__list' onClick={props.setActive}>
                    {menuItems.map((item) => (
                        <Link className='mobile__link' to={item.path} key={item.id}>{item.value}</Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MobileMenu;