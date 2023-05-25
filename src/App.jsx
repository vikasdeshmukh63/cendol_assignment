import './App.css'
import FirstAssignment from "./Components/Assignment1/FirstAssignment";
import SecondAssignment from "./Components/Assignment2/SecondAssignment";
import ThirdAssignment from './Components/Assignment3/ThirdAssignment';


function App() {

  // variable for second assignmenet
  const cendol = 2;

  return (
    <div className="App">
      {/* first assignment component  */}
      <FirstAssignment/>
      {/* second assignment component  */}
      <SecondAssignment cendol={cendol} />
      {/* third assignment component  */}
      <ThirdAssignment/>
    </div>
  )
}

export default App
