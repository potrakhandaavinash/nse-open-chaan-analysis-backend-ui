// import logo from './logo.svg';
// import './App.css';
// import Circle from './components/Circle';
// import Counter from './components/trading/apicall';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import Header from './components/Header'; // Import your Header component
// import App1 from './components/charts/bar';
// import BarGraph from './components/charts/bar';
// import { useState } from 'react';
// import OptionsChart from './components/charts/bar';

// const add = () => console.log("asdd")
// function App() {
//   const [name,setname] = useState("name")
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Ediaasaaaaaaaaaaaaaaaaaaaasaat  and save to reload.
//         </p>
        
//         <button onClick={() => setname('je')}><h2>{name}</h2></button>
//         <Circle />

//         <Circle> 
//           <p>heeee</p>
//         </Circle>
//         <Counter />
        
        
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
// }

// export default App;


// src/App.js

// Main application to get all the data
// import React from 'react';
// import './App.css';
// import OptionsChart from './components/charts/bar';
// import DataFetcher from './components/trading/optionDataFetcher';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <OptionsChart />
//         <DataFetcher />
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Home from './webpagecomp/Home';
import About from './webpagecomp/about';
import Navbar from './webpagecomp/Navbar';
import Product from './webpagecomp/Product';
import DataFetcher from './components/trading/optionDataFetcher';
import ReactDOM from 'react-dom';
import OptionsChart from './components/charts/bar';
import './App.css';
import Counter from './components/trading/test';


import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () =>{
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navbar /> 
      <Routes>
      <Route path='/home' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/product' Component={Product} />
      </Routes>
      </BrowserRouter> */}
      <About />
    </div>
  );
}

export default App;
