import React, { useState } from "react";
import "./ToggleStyle.css";
//Stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// function Toggle2() {
//     //const [count, setCount] = useState();

//     return <div className="toggle"></div>;
//   }
//Stateful functional component: component có sử dụng state

function Toggle() {
  //1. enabling state: useState(initialize value)
  //2. initialize state: useState(false)
  //3. reading state:
  //4. update state
  //initialize value: boolean, number, string, array , undefined, null,
    const [on, setOn] = useState(false);
    console.log(on);

    const handleToggle = () =>{
      //setOn(callback) -> seton(prevState => !prevState)
      setOn(on => !on)
    }
    return (
      <div>
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
          <div className={`spinner ${on ? "active" : ""}`}></div>
        </div>
        <div className="toggle-control">
          <div className="toggle-on" onClick={() => setOn(true)}>
            On
          </div>
          <div className="toggle-off" onClick={() => setOn(false)}>
            Off
          </div>
        </div>
      </div>
    );
  }
  
  // LẦN 2
  // const [on, setOn] = useState(false);
  // console.log(on);

  // const handleToggle = () =>{
  //   setOn(on => !on)
  // }
  // return (
  //   <div>
  //     <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
  //       <div className={`spinner ${on ? "active" : ""}`}></div>
  //     </div>
  //   </div>
  // );

export default Toggle;
