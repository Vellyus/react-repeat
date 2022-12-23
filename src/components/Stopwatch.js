import React, { useState } from "react"

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false)

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">0</span>
      <button
        onClick={ () => setIsRunning(prevState => !prevState) }
      >{ isRunning ? "Stop" : "Start" }</button>
      <button>Reset</button>
    </div>
  )
}

export default StopWatch