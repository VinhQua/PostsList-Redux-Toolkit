import BooleBot from "../BooleBot/BooleBot"
import './style.css'

const Tile = ({tile})=>{


    return(
        <div className="tile">
            <h1>{tile.id}</h1>
            {tile.hasBot? <BooleBot/> : undefined}
        </div>
    )
}
export default Tile