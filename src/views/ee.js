import './modal.css';
import wiring from './images/ee/wiring.jpg';
import schematic1 from './images/ee/schematic1.JPG';
import schematic2 from './images/ee/schematic2.jpg';
import code from './images/ee/code.png';
import final1 from './images/ee/final1.JPG';
import final2 from './images/ee/final2.JPG';

function Ee({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">IDEA-175: Introduction to Electrical Design & Engineering</div>
            
            <div className="content">
                <div className="project">
                    Arduino Otamatone
                </div>
                This was the final project for the class. An otamatone is an electronic instrument that changes pitch based on finger
                position on a slider. I was inspired to make an otamatone through arduino based on a ribbon
                potentiometer, which is a strip that changes resistance based off of where you press down on it.
                <br /><br />
                My partner Max Luband and I planned to create an otamatone with the addition of the following features: 
                an octave key, a sustain pedal, a pitch shifter, and volume control. We were successful in all features
                except for volume control. Below is the physical wiring of what we achieved with use of a Teensy LC, a 200mm soft potentiometer,
                some buttons, a rotary encoder, and a speaker.
                <br /><br />
                <img src = {wiring} alt = "wiring" />
                <br /><br />
                Below are some schematics: on the left is that of the speaker, the right is of the slider.
                <br /><br />
                <div className='twoimg'>
                    <img src = {schematic1} alt = 'schematic1' />
                    <img src = {schematic2} alt = 'schematic2' />
                </div>
                <br /><br />
                Max was tasked with the CAD design, and I was tasked with the code, which is displayed below, read from
                top to bottom, and left to right.
                <br /><br />
                <img src = {code} alt = 'code /' />
                <br /><br />
                Pictured below is our final product. And yes, it sounded great.
                <br /><br />
                <div className = "twoimg">
                    <img src = {final1} alt = 'final1' />
                    <img src = {final2} alt = 'final2' />
                </div>
                
            </div>
        </div>
    );
}

export default Ee;