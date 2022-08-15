
function ScoreDisplay(props) {

  function getRender() {
    if (props.score < 12) {
      return (<p>{props.score}</p>);
    } else {
      return (<button onClick={props.onPlayAgain}>Play again</button>);
    }
  }

  return(
    getRender()
  )
}

export default ScoreDisplay;