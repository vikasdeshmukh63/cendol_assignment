// importing modules
import { useState } from "react"
import "./ThirdAssignment.css"


const ThirdAssignment = () => {

    // button state 
    const [variable, setVariable] = useState(false)


    // function to change the state of variable on click 
    const handleClick = () => {
        setVariable(!variable);
    }
    return (
        <div>
            <button
                style={{ backgroundColor: variable ? "red" : "blue" }}
                onClick={handleClick}
                className="customButton"
            >Click to Change Color</button>
        </div>
    )
}

export default ThirdAssignment
