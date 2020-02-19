import React,{useState, useEffect} from 'react';
import './App.css';
import { Switch } from './Switch';

const App = () => {
  const [value, setValue] = useState(false)
  const [Time, setTime]= useState(0)
  const [isRunning, setIsRunning]=useState(false)
  // const toggleButton = ()=>{
  //   //onClick and change the state dynamically, change it to the opposite way
  //   setIsRunning(!isRunning)
  // }
  const reset=()=>{
    //reset the current state, not the initial one
    setTime(0)
    setIsRunning(false)
  }
  
  useEffect(()=>{
    //do the side effect if only isRunning change
    if (isRunning){
      const interval = setInterval(() => {
        setTime(s => s + 1)
      }, 1);
      // return clear interval in each render
      return  () => clearInterval(interval)
    }
  }, [isRunning]);

  return (
    <>
        <header>The Timer</header>
        <div>{Time}ms</div>
        <div><button onClick={reset}>Reset</button></div>
        {/* isRunning condition to change it automatically */}
        <button onClick={() =>setIsRunning(!isRunning)}>{isRunning ? 'Pause':'Start'}</button>
        {/* <button onClick={toggleButton}>{isRunning ? 'Pause':'Start'}</button>  different ways of writing it*/  }
    <Switch
      isOn={value} handleToggle={() => setValue (!value)} onColor= '#06D6A0'/>
    </>
  );
  
}

export default App;
