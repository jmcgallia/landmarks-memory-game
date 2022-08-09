

function Card(props) {
  return (
    <div className="Card" onClick={props.onClick} name={props.name}>
      <img src={props.source}></img>
      <p>{props.name}</p>
    </div>
  )
}

export default Card;