// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  // const [name, setName] = React.useState(
  //   window.localStorage.getItem('name') || initialName
  // )
  console.log('RENDERING GREETING');
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName
  )

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() => {
    console.log('USE EFFECT');
    window.localStorage.setItem('name', name);
  }, [name])  

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0);
  return <><button onClick={() => setCount(previousCount => previousCount + 1)}>{count}</button><Greeting /></>
}

export default App
