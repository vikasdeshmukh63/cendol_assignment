// importing modules 
import { useState } from "react";
import "./SecondAssignment.css";
import PropTypes from 'prop-types';


const SecondAssignment = ({ cendol }) => {
    // num state 
    const [num, setNum] = useState(cendol);

    // function to handle click and increase the num by 10
    const handleClick = () => {
        setNum((prev) => {
            return prev + 10
        });
    }

    return (
        <div className="counter">
            <h1>{num}</h1>
            <button onClick={handleClick}>Click to Increase by 10</button>
        </div>
    )
}

SecondAssignment.propTypes = {
    cendol: PropTypes.number.isRequired,
};

export default SecondAssignment
