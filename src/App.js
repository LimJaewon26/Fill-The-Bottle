import { useState } from 'react';
import './App.css';


function Main(props){
  return <div id='Main'> 
    <button onClick={props.ModeChange}>start</button>
  </div>
}

function InGame(){
  return <div id = 'InGame'>
      <button>STOP</button>
    </div>
}


function App() {

  const [mode, setmode] = new useState('Main');
  let content = null;

  if(mode === 'Main')
  {
    content = <Main ModeChange = {() => setmode("InGame")}></Main>
  }
  else if(mode === 'InGame')
  {
    content = <InGame></InGame>
  }

  return (
    <div>
      <header>
        <h1>Fill The Bottle</h1>
      </header>
      {content}
      <img src = {require("./images/bottle.png")} alt = 'bottle'></img>
    </div>
  );
}

export default App;
