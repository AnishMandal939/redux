import React from 'react'
import Home from './Home.jsx'
const App = () => {
  const value = 20;
  return (
    <div className="App">
      <Home value={value}  />
    </div>
  )
}

export default App;