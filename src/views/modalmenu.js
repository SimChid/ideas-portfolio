import React from 'react';
import Popup from 'reactjs-popup';
import './modalmenu.css';
import Ee from './ee.js';
import Dml from './dml.js';
import Sda from './sda.js';

function Menu() {
    return(
        <ul className = 'menu'>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Electrical Engineering</button>}
                    modal
                    contentStyle={{ width: "70%" }}
                    overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
                >
                   {close => <Ee close = {close}/>}
                </Popup>
            </li>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Digital Media Lab</button>}
                    modal
                    contentStyle={{ width: "70%" }}
                    overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
                >
                    {close => <Dml close = {close}/>}
                </Popup>
            </li>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Sensors and Data Analysis</button>}
                    modal
                    contentStyle={{ width: "70%" }}
                    overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
                >
                    {close => <Sda close = {close}/>}
                </Popup>
            </li>
        </ul>
    )
};

export default Menu;