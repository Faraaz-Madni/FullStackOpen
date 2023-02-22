import { useState } from 'react'
import './App.css'

const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = (props) => {
  return (
    <h1> Welcome to {props.course} </h1>
    )
}

const Part = () =>{
  const part1 = 'Fundamentals of React'
  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
    </>
  )
}

const Content = () => {

  // const part2 = 'Using props to pass data'

  // const part3 = 'State of a component'

  return (
    <>
    <Part/>
    <Part/>
    <Part/>
      {/* <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
    </>
  )

}

const Total = () => {
  return (
    <p> Number of exercises are {exercises1 + exercises2 + exercises3} </p>
  )
}

const App = () => {

  const course = 'Half Stack application development'

  return(
    <div>
      <Header course={course} />
      <Content/>
      <Total/>
    </div>
  )
}

export default App
