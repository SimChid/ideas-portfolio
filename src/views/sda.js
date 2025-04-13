import './modal.css';
import cameracode from './images/sda/cameracode.png';
import cubeimage from './images/sda/cubeimage.png';
import colorcode from './images/sda/colorcode.png';
import matrix from './images/sda/matrix.png';
import turns from './images/sda/turns.png';
import upturn from './images/sda/upturn.png';


function Sda({ close }) {
    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="header">IDEA-215: Sensors, Measurement, and Data Analysis</div>
            <div className="content">
                <div className="project">Rubik's Cube Solver</div>
                To be clear, this is a project that ended up not working. While the color detection worked wonderfully, the
                actual algorithm for solving the cube didn't. Here is the process.
                <br /><br />
                The goal was to create a software that took images of faces of a 2x2 rubik's cube, and uses those colors to create a
                virtual cube in python through the use of OpenCV. It will solve the cube, and prints instructions
                for the person solving alongside.
                <br /><br />
                The reason I decided to program a 2x2 rubik's cube as opposed to a regular 3x3 cube was because not only does it have
                fewer scrambled states, it takes much fewer steps to solve.
                <br /><br />
                There were two parts to implementation: scanning the cube (which was successful), and solving the cube (unsuccessful).
                To scan the cube, I implemented the libraries OpenCV to take the picture, and ColorThief to scan the colors of the image.
                Here is the code for the camera. Basically, it turns the computer's camera on, and places a box in the middle of the video.
                The user is then tasked to hold the cube such that it is covered by the box, and take a picture by pressing the spacebar.
                The user will then rotate the cube as instructed.
                <br /><br />
                <div className='twoimg'>
                    <img src={cameracode} alt='cameracode' />
                    <img src={cubeimage} alt='cubeimage' />
                </div>
                <br /><br />
                I then used the following code to scan for the colors of the presented sides, and compare them with their known rgb values.
                <br /><br />
                <img src={colorcode} alt='colorcode' />
                <br /><br />
                The color-name of each square was then assigned to a matrix, where each row was a face, and each column was a specific
                square on that face in a given orientation (order top-left, top-right, bottom-right, bottom-left). 
                Below is an example of a matrix that I made in the early stages of the project.
                <br /><br />
                <img src={matrix} alt='matrix' />
                <br /><br />
                Now to solve the cube! This didn't end up working. What did work were the turning functions, which turns the virtual
                cube, and prints the move that it made through the use of notation specific to cube solving.
                <br /><br />
                <div className='twoimg'>
                    <img src={turns} alt='turns' />
                    <img src={upturn} alt='upturn' />
                </div>
                <br /><br />
                Unfortunately, the algorithm that I used to solve the cube did not work. To say the least, it kept repeating steps
                and it never terminated. With as much promise and hope the program was given, and the sheer number of hours I put into making
                a working app, it never got to a solved state. But since the project was focused on using sensors to collect data 
                to manipulate, I think I was overall successful with this project, given its drawbacks.
            </div>
        </div>
    );
}

export default Sda;