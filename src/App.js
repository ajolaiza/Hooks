import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import Hookcounter from './components/Hookcounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
function App() {
  return (
    <div className="App">
      {/* <classCounter/> */}
      {/* <Hookcounter/> */}
      {/* <HookCounterTwo/> */}
      <HookCounterThree/>
     
    </div>
  );
}

export default App;
