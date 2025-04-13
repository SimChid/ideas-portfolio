import './modal.css';
import DiJaws from "./images/dml/DiJaws.jpg";
import LedVuitton from "./images/dml/LedVuitton.jpg";
import ScreamDesGarcons from "./images/dml/ScreamDesGarcons.jpg";
import BigBuys from "./images/dml/BigBuys.jpg";

function Dml({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">IDEA-285: Digital Media Lab</div>
            <div className="content">
                <div className='project'>BigBuys (a collection of vintage t-shirts with designer logos)</div>
                This was for the assignment titled "Replicas, Forgeries, Counterfeits, and Imposters", where we were basically tasked
                to steal art through one of the methods above. I used Adobe Photoshop to combine vintage t-shirts with designer brands
                to hypothetically create the most valuable shirt based on graphic design alone. Below are just some examples:
                <br/><br />
                <img src={DiJaws} alt='DiJaws' />
                <div className='caption'>A design from Dior mashed with the Jaws poster.</div>
                <br/><br/>
                <img src={LedVuitton} alt='LedVuiton' />
                <div className='caption'>A Louis Vuitton shirt with a Led Zeppelin logo placed over it</div>
                <br /><br />
                <img src={ScreamDesGarcons} alt='ScreamDesGarcons' />
                <div className='caption'>The Scream poster with a Comme Des Garcons heart pasted over Neve Campbell's face.</div>
                <br /><br />
                Furthermore, in photoshop, I created a fake website based directly off of Etsy, and gave all of this shirts absurd names and
                prices.
                <br /><br />
                <img src={BigBuys} alt='BigBuys' />
            </div>
        </div>
    );
}

export default Dml;