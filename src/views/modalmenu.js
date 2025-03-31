import Popup from 'reactjs-popup';
import './modalmenu.css';

function Menu() {
    return(
        <ul className = 'menu'>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Digital Foundations</button>}
                    modal
                >
                    <div>
                        This is a test
                    </div>
                
                </Popup>
            </li>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Electrical Engineering</button>}
                    modal
                >
                    <div>
                        This is another test
                    </div>

                </Popup>
            </li>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Digital Media Lab</button>}
                    modal
                >
                    <div>
                        Yet another test!
                    </div>

                </Popup>
            </li>
            <li>
                <Popup
                    trigger = {<button className = 'button'>Sensors and Data Analysis</button>}
                    modal
                >
                    <div>
                        Voila!
                    </div>

                </Popup>
            </li>
        </ul>
    )
};

export default Menu;