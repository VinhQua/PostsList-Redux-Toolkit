import logo from './logo.svg';
import './App.css';
import { ArenaTiles } from './ArenaData';
import Arena from './Components/Arena/Arena';
import { useEffect,useState } from 'react'
import Direction from './Components/ControlPanel/directions';

const App=()=> {
  const [botIsAtTile,SetBotIsAtTile] = useState(25)
  const [tiles,setTiles] = useState(ArenaTiles)
  const [ direction,setDirection] = useState('north');
    const start=() =>{
      const random = Math.floor(Math.random()*65)
      SetBotIsAtTile(random)

    }

 const startgame= useEffect(()=>{

    let timeid 
    if (direction === 'north' && botIsAtTile >= 8){
       timeid = setInterval(() => {
        setTiles(tiles => tiles.map(tile =>{
          tile.hasBot = false
          return tile
        } ))
        SetBotIsAtTile((botIsAtTile) => botIsAtTile -8);
      }, 1000);
    }  else if (direction === 'south' && botIsAtTile <= 56){
      timeid = setInterval(() => {
       setTiles(tiles => tiles.map(tile =>{
         tile.hasBot = false
         return tile
       } ))
       SetBotIsAtTile((botIsAtTile) => botIsAtTile +8);
     }, 1000);
   }  else if (direction === 'east' && botIsAtTile % 8 !== 1){
    timeid = setInterval(() => {
     setTiles(tiles => tiles.map(tile =>{
       tile.hasBot = false
       return tile
     } ))
     SetBotIsAtTile((botIsAtTile) => botIsAtTile -1);
   }, 1000);
 }  else if (direction === 'west' && botIsAtTile % 8 !== 0){
  timeid = setInterval(() => {
   setTiles(tiles => tiles.map(tile =>{
     tile.hasBot = false
     return tile
   } ))
   SetBotIsAtTile((botIsAtTile) => botIsAtTile + 1);
 }, 1000);
}  
    return ()=> {
      clearInterval(timeid);
    }
  })
    
  return (
    <div className="App">
      <button onClick={start}>Start</button>
      <Arena
       botIsAtTile={botIsAtTile} ArenaTiles={tiles}
       />
       <Direction/>

    </div>
  );
}




export default App;
