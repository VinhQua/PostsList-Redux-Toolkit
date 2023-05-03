import Tile from '../Tile/Tile'
import './style.css'


const Arena = ({botIsAtTile,ArenaTiles})=>{

    
    const tiles = ArenaTiles.map(tile => {
        if (tile.id === botIsAtTile){
             tile.hasBot = true
            return <Tile key={tile.id} tile={tile} />  
        }

     return <Tile key={tile.id} tile={tile} />  
    })

    return(
        <div className="arena">
            {tiles}
        </div>
    )
}

export default Arena