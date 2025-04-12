import './modal.css';

function Sda({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">IDEA-215: Sensors, Measurement, and Data Analysis</div>
            <div className="content">
                This page is under construction
            </div>
        </div>
    );
}

export default Sda;