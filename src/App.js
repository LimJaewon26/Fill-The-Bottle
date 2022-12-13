import { useState } from 'react';
import './App.css';

function Main(props){
  return <div id='Main'> 
    <button onClick={props.ModeChange}>START</button>
  </div>
}
function End(props){
  return<div id='End'> 
  <button onClick={props.ModeChange}>RESTART</button>
</div>
}

function App() {

  const [mode, setmode] = useState('Main');
  const [water,setwater] = useState(10);

  let content = null;
  let speed = 500

  if(mode === 'Main')
  {
    if(water !== 10)
      setwater(10);
    content = <Main ModeChange = {() => setmode("InGame")}></Main>
  }
  else if(mode === 'InGame')
  {
    let timeout = setTimeout(() => {
      setwater(water-1);
    }, speed);
    if(water <= 0)
    {
      clearTimeout(timeout);
      setmode("End");
    }  
  }
  else if(mode === 'End')
  {
    content = <End ModeChange = {() => {setmode("Main")}}></End>
  }
  return (
    <div>
    <header>
      <h1>Fill The Bottle</h1>
      </header>
      {content}
      <img src = {require("./images/bottle.png")} alt = 'bottle'></img>
      <img id = {"water" + water} src = {require("./images/water.png")} alt = 'water'></img>
    </div>
  );
}
export default App;