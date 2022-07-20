import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // function to increment count of ratings
  const incrementGood = () => {
    setGood(good +1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral +1)
  }
  const incrementBad = () => {
    setBad(bad +1)
  }

  const sumTotal = (setBad, setGood, setNeutral) => {
    const sum = setBad + setGood + setNeutral;
    console.log(sum);
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <button onClick={incrementGood} >good</button>
      <button onClick={incrementNeutral} >neutral</button>
      <button onClick={incrementBad} >bad</button>
      <br />
      <h1>statistics</h1>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      <p>all {sumTotal} </p>
    </div>
  )
}

export default App;
