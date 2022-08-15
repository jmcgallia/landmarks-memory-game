import { useEffect, useState } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';


function App() {

  const [displayStartPage, toggleDisplayStartPage] = useState("block");
  const [displayGamePage, toggleDisplayGamePage] = useState("none");



  let html = document.querySelector("html");
  html.classList.add("backGroundImage");
  

  useEffect(() => {

    let currentBackGround = "barcelona";
    html.classList.add("barcelona")

    const interval = setInterval(() => {
      if (currentBackGround === "barcelona") {
        currentBackGround = "tokyo";
        console.log("it happened barcelona")
        html.classList.remove("barcelona");
        html.classList.add("tokyo");
        
      } else {
        currentBackGround = "barcelona"
        console.log("It happened tokyo")
        html.classList.remove("tokyo");
        html.classList.add("barcelona")
      
        }
      }, 10000)
  }, [])

  return (
    <div className="App">
      {/*<StartPage/>*/}
     


      <header>
        <div>
          <p>Jordan McGalliard</p>
          <p><a href="https://github.com/jordan-mcgalliard">GitHub</a></p>
          <p>Images <a href="https://www.pexels.com/license/">Source</a></p>
        </div>
      </header>


      <GamePage/>


    </div>

  );
}

export default App;
