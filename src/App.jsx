import React, { useState } from 'react'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const [good, setGood] = useState(0)

  const handleGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const handleOk = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const handleBad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const handleReset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  store.subscribe(() => {
    setGood(store.getState().good)
  })

  return (
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleOk}>ok</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={handleReset}>reset stats</button>
      <div>good: {good}</div>
      <div>ok: {store.getState().ok}</div>
      <div>bad: {store.getState().bad}</div>
    </div>
  )
}
export default App
