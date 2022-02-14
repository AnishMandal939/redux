import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Home.jsx'
const App = () => {
  // const value = 20;
  const dispatch = useDispatch();
  const {c} = useSelector(state => state.custom);
  return (
    <div className="App">
      <h1>{c}</h1>
      <Home  />
    </div>
  )
}

export default App;