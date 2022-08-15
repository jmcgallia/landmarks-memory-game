import { useEffect, useState } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';


function App() {

  // Save names of CSS classes to go through for the background
  // They are just defined on first render since it is w/ useState()
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
  // "backGroundImage" class has stuff for the changing backgrounds
  html.classList.add("backGroundImage");
  
  // useEffect() only has [] as its 2nd arg, which means it just runs on first render
  // We set up the background slider and set the interval timer for it here
  useEffect(() => {

    let currentBackGround = "iran";
    let imageIndex = Math.floor(Math.random() * 7);
    html.classList.add(imageClasses[imageIndex]);

    

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

  // Render the app. I decided not to have a startpage, it seems redundant

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
