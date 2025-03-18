import { useState } from 'react'

// componenete para mostrar las estadísticas
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  // si no hay feedback, muestra un mensaje
  if (all === 0) {
    return <p>No feedback given</p>
  }

  // Calcula el porcentaje de feedback positivo
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
      <p></p>
    </div>
  )
}

// App component
const App = () => {
  // estados para guardar la cantidad de feedback
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      {/* Botones */}
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>  
      {/* Muestra Statistics */}
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App