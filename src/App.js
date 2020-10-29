import React from "react";
import Canvas from "./components/Canvas"
import Chip from "./components/Chip"



const score = 0; 
export const ScoreContext = React.createContext(0);

// const findContext = () => {
//     const {score, increment} = useContext(ScoreContext)
// }


function App() {
  const [score, setScore] = React.useState(0);
  console.log(score)
  
  return (
    <div>
      <ScoreContext.Provider value={score}>
        <Canvas />
        
      </ScoreContext.Provider>
       
  
    </div>
  )

}

export default App

