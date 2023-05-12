import { useState } from 'react'
import './App.css'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}> {text} </button>
    )
}

const StatisticsLine = ({ text,value }) => {
  return(
    <>
    {text}:   {value}   
    </>
  )
}

const Statistics = (props) => {

  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0 ){
    return(
      <div>
        <h1> Statistics</h1>
        <table>
        <tbody>
        <tr> <StatisticsLine text="Good" value={props.good}/> </tr>
        <tr> <StatisticsLine text="Neutral" value={props.neutral}/> </tr>
        <tr> <StatisticsLine text="Bad" value={props.bad}/> </tr>
        <tr> <StatisticsLine text="Total" value={props.total}/> </tr>
        <tr> <StatisticsLine text="Average" value={(props.good - props.bad) / props.total}/> </tr>
        <tr> <StatisticsLine text="Positive" value={(props.good / props.total) * 100}/> </tr>
        </tbody>
        </table>
      </div>
    )
  }
  else{
      return(
        <div>
          <p> No feedback given. </p>
        </div>
      )
    }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)

  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const feedbackGood = () => {setGood(good+1); setTotal(total+1)}
  const feedbackNeutral = () => {setNeutral(neutral+1); setTotal(total+1)}
  const feedbackBad = () => {setBad(bad+1); setTotal(total+1)}

  return (
    <div>

    <h1> Give Feedback </h1>  

    <Button handleClick={feedbackGood} text="Good"></Button>
    <Button handleClick={feedbackNeutral} text="Neutral"></Button>
    <Button handleClick={feedbackBad} text="Bad"></Button>

    <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}></Statistics>
    </div>
  )
}

export default App
