import { useState } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState([0, 0, 0, 4, 0, 0, 0, 0])

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  // To prevent scrolling into empty anecdotes.
  const incrementSelected = () => { 
    if (selected < anecdotes.length - 1){ 
      setSelected(selected + 1)
    }
  }
  const decrementSelected = () => {
    if (selected > 0){
      setSelected(selected - 1)
    }
  }
  const incrementVote =() => setVote(vote + 1)

  // Allows you to vote for the displayed anecdote
  const setToValue = (index) => () => {
    const copy = [...points]    
    console.log('Index being edited', index)
    copy[index] += 1
    console.log('New copy var is', copy)
    setPoints(copy)
    
  }
  
  // Displays the anecdote with the largest number of votes
  const popularAnecdoteIndex = [...points].indexOf(Math.max(...points))
    
  return (
    <div>
      <button onClick={decrementSelected}> Previous Anecdote </button> <br/> <br/>
      {anecdotes[selected]}   <br/>
      This has {points[selected]} votes.  <br/><br/>
      
      <button onClick={incrementSelected}> Next Anecdote </button> <br/> <br/>
      <button onClick={setToValue([selected])}> Vote </button>

      <h1> Anecdote with most votes </h1>
      {anecdotes[popularAnecdoteIndex]}
    </div>
  )
}

export default App