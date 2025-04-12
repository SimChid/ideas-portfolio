import './modal.css';

function Dml({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">IDEA-285: Digital Media Lab</div>
            <div className="content">
                this page is under construction
            </div>
        </div>
    );
}

export default Dml;