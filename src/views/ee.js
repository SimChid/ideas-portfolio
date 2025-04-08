import './modal.css';

function Ee({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">IDEA-175: Introduction to Electrical Design & Engineering</div>
            <div className="project">
                Arduino Otamatone
            </div>
            <div className="content">
                This was the final project for the class. An otamatone is an electronic instrument that changes pitch based on finger
                position on a slider. I was inspired to make an otamatone through arduino based on a ribbon
                potentiometer, which is a strip that changes resistance based off of where you press down on it.
                <br /><br />
                My partner and I planned to create an otamatone with the addition of the following features: 
                an octave key, a sustain pedal, a pitch shifter, and volume control. We were successful in all features
                except for volume control.
                <br /><br />
                <img src = "./images/ee/wiring.jpg" alt = "wiring" />

            </div>
        </div>
    );
}

export default Ee;