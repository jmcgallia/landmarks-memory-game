import pyramids from "../media/pictures/pyramids.jpg";
import taipei101 from "../media/pictures/taipei-101.jpg";
import goldenGateBridge from "../media/pictures/golden-gate-bridge.jpg";
import colloseum from "../media/pictures/colloseum.jpg";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.source}></img>
      <p>{props.name}</p>
    </div>
  )
}

export default Card;