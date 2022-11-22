import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState();
  
  const randomColor = () => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
    console.log(color);
  }

  return (
    <div className="App">
      <div className='wrap'>
        <div className='color-box' style={{backgroundColor: `#${color}`}}></div>
        <button className='randomize' onClick={randomColor}>Randomize</button>
      </div>
    </div>
  )
}

export default App
