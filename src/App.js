import { useEffect, useState } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';


function App() {

  const [displayStartPage, toggleDisplayStartPage] = useState("block");
  const [displayGamePage, toggleDisplayGamePage] = useState("none");
  const [imageClasses, setImageClasses] = useState([
    "iran",
    "istanbul",
    "newyork",
    "sea",
    "spain",
    "tokyo",
    "utah",
    "vietnam"
  ])


  let html = document.querySelector("html");
  html.classList.add("backGroundImage");
  

  useEffect(() => {

    let currentBackGround = "iran";
    html.classList.add("iran")
    let imageIndex = 0;

    const interval = setInterval(() => {

      currentBackGround = imageClasses[imageIndex];
      html.classList.add(imageClasses[imageIndex])
      
      if (imageIndex !== 7 && imageIndex !== 0) {
        html.classList.remove(imageClasses[imageIndex-1])
        imageIndex += 1;
      } else if (imageIndex === 7) {
        html.classList.remove(imageClasses[imageIndex-1])
        imageIndex = 0;
      } else if (imageIndex === 0) {
        html.classList.remove(imageClasses[7])
        imageIndex += 1;
      }



      }, 8000)
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
