import './modal.css';

function Df({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">ARST-190: Digital Foundations</div>
            <div className="content">
                This page is under construction.
            </div>
        </div>
    );
}

export default Df;