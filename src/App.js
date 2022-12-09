import { useState } from 'react';
import './App.css';


function Main(props){
  return <div id='Main'> 
    <button onClick={props.ModeChange}>START</button>
  </div>
}

function InGame(props){




  return <div>
      <p><b>STAGE {props.stage}</b></p>
      <button onClick={props.ModeChange}>STOP</button>
    </div>
}

function PauseGame(props){
  return <div>
    <p><b>STAGE {props.stage}</b></p> 
    <button onClick={props.ModeChange}>START</button>
  </div>
}


function App() {

  const [mode, setmode] = useState('Main');
  let content = null;
  let stage = 1;
  let MaxStage = 1;

  if(mode === 'Main')
  {
    content = <Main ModeChange = {() => setmode("InGame")}></Main>
  }
  else if(mode === 'InGame')
  {


    content = <InGame  stage = {stage} ModeChange = {() => {setmode("PauseGame")}}></InGame>
  }
  else if(mode === 'PauseGame')
  {
    content = <PauseGame stage = {stage} ModeChange = {() => {setmode("InGame")}}></PauseGame>
  }

  return (
    <div>
      <header>
        <h1>Fill The Bottle</h1>
      </header>
      {content}
      <img src = {require("./images/bottle.png")} alt = 'bottle'></img>
      <img id = "water" src = {require("./images/water.png")} alt = 'water'></img>
    </div>
  );
}

export default App;
