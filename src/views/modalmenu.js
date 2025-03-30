import Popup from 'reactjs-popup';
import './modalmenu.css';

function Menu() {
    <Popup
        trigger = {<button className = 'button'>Test</button>}
        modal
    >
        <div>
            This is a test
        </div>
        
    </Popup>
};

export default Menu;