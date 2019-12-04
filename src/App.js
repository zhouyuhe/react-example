import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [Time, setTime]= useState(0)
  const [isRunning, setIsRunning]=useState(false)
  const toggleButton = ()=>{
    //onClick and change the state dynamically, change it to the opposite way
    setIsRunning(!isRunning)
  }
  const reset=()=>{
    //reset the current state, not the initial one
    setTime(0)
    setIsRunning(false)
  }
  
  useEffect(()=>{
    //render only isRunning change
    if (isRunning){
      const interval = setInterval(() => {
        setTime(s => s + 1)
      }, 1);
      return  () => clearInterval(interval)
    }
  }, [isRunning]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Timer
        </p>
        <div>{Time}ms</div>
        <div><button onClick={reset}>Reset</button></div>
        {/* isRunning condition to change it automatically */}
        <button onClick={toggleButton}>{isRunning ? 'Pause':'Start'}</button>
      </header>
    </div>
  );
}

export default App;
