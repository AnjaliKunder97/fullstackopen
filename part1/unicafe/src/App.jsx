import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) *  100
  return (
  <>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>total {all}</p>
    <p>average {average}</p>
    <p>positive {positive} %</p>
  </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <Header title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App