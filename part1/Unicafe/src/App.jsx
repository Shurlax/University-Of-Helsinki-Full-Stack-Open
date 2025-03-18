import { useState } from 'react'

// Componente para mostrar una única estadística
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Componente para mostrar las estadísticas
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad // Calcula el total de feedback

  // Si no hay feedback, muestra un mensaje
  if (all === 0) {
    return <p>No feedback given</p>
  }

  // Calcula el promedio de feedback
  const average = (good - bad) / all
  // Calcula el porcentaje de feedback positivo
  const positive = (good / all) * 100

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          {/* Muestra cada estadística usando el componente StatisticLine */}
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </tbody>
      </table>
    </div>
  )
}

// Componente para los botones
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

// Componente principal de la aplicación
const App = () => {
  // Definición de los estados para cada tipo de feedback
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      {/* Botones para incrementar el feedback */}
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      {/* Componente para mostrar las estadísticas */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App