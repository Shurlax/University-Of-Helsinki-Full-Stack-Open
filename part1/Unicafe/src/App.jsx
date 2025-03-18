import { useState } from 'react' // Importa el hook useState de React

// Componente para mostrar una única estadística
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> {/* Muestra el texto de la estadística */}
      <td>{value}</td> {/* Muestra el valor de la estadística */}
    </tr>
  )
}

// Componente para mostrar las estadísticas
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad // Calcula el total de feedback

  // Si no hay feedback, muestra un mensaje
  if (all === 0) {
    return <p>No feedback given</p> // Muestra un mensaje si no hay feedback
  }

  // Calcula el promedio de feedback
  const average = (good - bad) / all
  // Calcula el porcentaje de feedback positivo
  const positive = (good / all) * 100

  return (
    <div>
      <h1>statistics</h1> {/* Título de la sección de estadísticas */}
      <table>
        <tbody>
          <StatisticLine text="good" value={good} /> {/* Muestra la cantidad de feedback "good" */}
          <StatisticLine text="neutral" value={neutral} /> {/* Muestra la cantidad de feedback "neutral" */}
          <StatisticLine text="bad" value={bad} /> {/* Muestra la cantidad de feedback "bad" */}
          <StatisticLine text="all" value={all} /> {/* Muestra el total de feedback */}
          <StatisticLine text="average" value={average} /> {/* Muestra el promedio de feedback */}
          <StatisticLine text="positive" value={`${positive} %`} /> {/* Muestra el porcentaje de feedback positivo */}
        </tbody>
      </table>
    </div>
  )
}

// Componente para los botones
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button> // Botón que ejecuta una función al hacer clic
  )
}

// Componente principal de la aplicación
const App = () => {
  // Estados para guardar la cantidad de feedback
  const [good, setGood] = useState(0) // Estado para feedback "good"
  const [neutral, setNeutral] = useState(0) // Estado para feedback "neutral"
  const [bad, setBad] = useState(0) // Estado para feedback "bad"

  return (
    <div>
      <h1>give feedback</h1> {/* Título de la sección de feedback */}
      {/* Botones para dar feedback */}
      <Button onClick={() => setGood(good + 1)} text="good" /> {/* Incrementa el feedback "good" */}
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" /> {/* Incrementa el feedback "neutral" */}
      <Button onClick={() => setBad(bad + 1)} text="bad" /> {/* Incrementa el feedback "bad" */}
      {/* Muestra las estadísticas */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App // Exporta el componente App como el componente principal