import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/Youtube/YoutubeList";
import Toggle from "./components/state/Toggle";
import Counter from "./components/counter/Counter";
import GameTic from "./components/Tictactoe/GameTic";
//JSX: Javascript xml
//ES6
//Babel
/**
 *
 * element = <div id"root">Hello world</div>    => JSX khong phai HTMl
 * functionc createElement(elementType, props,.... children)
 * elementType: div, p, span
 * props: className, id, src, alt
 * ...children:
 * element2 = (<div>
 *  <span> Hello </span> <span> World </span>
 * </div>
 */


//parent component
function App() {
  //const name = "Len Vo";
  return (
    <div>
    {/* children component */}
      {/* <YoutubeList>
        {name}
      </YoutubeList> */}
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <GameTic></GameTic>
    </div>
  );
}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello {name === 'Len Vo' ? "Len" : "Anh/Chi"}
//         </p>
//         <h2>{fullname("Vo Thanh", "Len")}</h2>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

// props
// function YoutubeItem(props) {
//   return (
//     <div className={`ytb-item ${props.className}`}>
//       <div className="ytb-img">
//         <img src={props.image} alt="villa" />
//       </div>
//       <div className="ytb-footer">
//         <img className="ytb-avatar" src={props.avatar} alt="avatar" />
//         <div className="ytb-info">
//           <h3 className="ytb-title">{props.title || "No Title"}</h3>
//           <h4 className="ytb-author">{props.author || "No Author"}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// Rendering list

export default App;
