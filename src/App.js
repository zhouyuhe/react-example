import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [second, setSecond]= useState(0)
  const [isRunning, setIsRunning]=useState(false)
  const toggleButton = ()=>{
    //onClick and change the state dynamically
    setIsRunning(!isRunning)
  }
  const reset=()=>{
    //reset the current state, not the initial one
    setSecond(0)
    setIsRunning(false)
  }
  
  useEffect(()=>{
    //render only interval and second changes
    let interval
    if (isRunning){
      interval=setInterval(() => {
        setSecond(second+1)
      }, 10);
    }else if (!isRunning && second !==0){
      clearInterval(interval)
    }
    return  () => clearInterval(interval)

  }, [isRunning, second])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Timer
        </p>
        <div>{second}</div>
        <button onClick={reset}>Reset</button>
        {/* isRunning condition to change it automatically */}
        <button onClick={toggleButton}>{isRunning ? 'Pause':'Start'}</button>
      </header>
    </div>
  );
}

export default App;
