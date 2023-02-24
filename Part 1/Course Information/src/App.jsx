import { useState } from 'react'
import './App.css'


const Header = (props) => {
  console.log("Props passed to Header: ", {props})
  return (
    <h1> Welcome to {props.course} </h1>
    )
}

const Content = (props) => {
  return (
    <>
    {props.part[0].name}  <br />
    {props.part[1].name}  <br />
    {props.part[2].name}  <br />
    </>
  )

}

const Total = (props) => {
  return (
    <>
    <p>  {props.part[0].exercises} </p>
    <p>  {props.part[1].exercises} </p>
    <p>  {props.part[2].exercises} </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return(
    <div>
      <Header course= {course.name} />
      <Content part = {course.parts}/>
      <Total part = {course.parts}/>
    </div>
  )
}

export default App
