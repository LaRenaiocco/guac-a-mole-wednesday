import React from "react";
import Canvas from "./components/Canvas"
import Chip from "./components/Chip"
import ScoreBoard from "./components/ScoreBoard"


export const score = 0
 export const ScoreContext = React.createContext(score)



function App() {
  
  return (
    <div>
      <ScoreContext.Provider value={score}>
        <Canvas />
<<<<<<< HEAD
        <div className='row'>
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </div>
=======
>>>>>>> 47bfc6ab5dd065b97566782dabc7c21602cbf4d5
        <ScoreBoard />
      </ScoreContext.Provider>
        <Chip />
  
    </div>
  )

}

export default App

