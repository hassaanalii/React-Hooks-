import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const clicked1 = () =>{
    setCount1(count1+1);
  }
  const clicked2 = () =>{
    setCount2(count2+1);
  }
  useEffect(()=>{
    alert("hello")
  },[count1])
  return (
    <div className="App">
     <button onClick={clicked1}>Press me</button>
     <p>{count1}</p>
     <button onClick={clicked2}>Press me</button>
     <p>{count2}</p>
    </div>
  );
}

export default App;
