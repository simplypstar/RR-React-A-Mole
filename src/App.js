// Apps.js
import React, { useState } from 'react'
import MoleContainer from './components/MoleContainer'
import './App.css'
// import splashScreen from './components/SplashScreen.js'
// import splashScreen from './components/SplashScreen.js'
// import BrowserRouter from 'react-router-dom';

// function AppStart() {
//   splashScreen()
// }
// App.js
function App() {
  
let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />  
            )
        }    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            <h2> {score} </h2>
            {createMoleHill()}
        </div>
    )    
}

export default App;
