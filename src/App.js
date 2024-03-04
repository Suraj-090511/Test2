import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import Context from './Components/Context';
import Reducers from './Components/Reducers';
import SendInput from './Components/SendInput';
import StopWatch from './Components/StopWatch';

// import Routing from './Components/Routing';

function App() {

  const [state,Setstate] = useState(10000);

  return (
   <>
  <h1>hello Motto</h1>
    <StopWatch/>
    {/* <Home number = {state}/> */}
    
   </>
  );
}

export default App;
