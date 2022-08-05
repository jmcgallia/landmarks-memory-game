import Card from './Card'

function GamePage(props) {
  return (
    <div className="GamePage">


      <div className="infoArea">
        <p>Score</p><p>Record</p>
      </div>

      <div className="cardArea">
        
        <div className="cardHolderOne">
          <Card/>
          <Card/>
        </div>

        <div className="cardHolderTwo">
          <Card/>
          <Card/>
        </div>

      </div>

      <div className="instructionsArea">
        Instructions
      </div>


    </div>
  )
}

export default GamePage;