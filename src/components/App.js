import React, { useEffect } from "react"
import Header from "./Header"
import Player from "./Player"
import AddPlayerForm from "./AddPlayerForm"
import { useState, useRef } from "react"

const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      id: 1,
      score: 0
    },
    {
      name: "Treasure",
      id: 2,
      score: 0
    },
    {
      name: "Ashley",
      id: 3,
      score: 0
    },
    {
      name: "James",
      id: 4,
      score: 0
    }
  ])

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {
        return {
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      else return player
    }))
  }

  const [highScore, setHighScore] = useState()

  useEffect(() => {
    const scores = players.map(player => player.score)
    setHighScore(Math.max(...scores))
  }, [players])

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id))
  }

  const nextPlayerId = useRef(5)

  const handleAddPlayer = (name) => {
    setPlayers(prevPlayers => [...prevPlayers, {
      name,
      id: nextPlayerId.current++,
      score: 0
    }])
  }

  return (
    <div className="scoreboard">
      <Header
        players={ players }
      />

      {/* Players list */ }
      { players.map(player =>
        <Player
          name={ player.name }
          score={ player.score }
          id={ player.id }
          key={ player.id.toString() }
          removePlayer={ handleRemovePlayer }
          changeScore={ handleScoreChange }
          isHighScore={ highScore === player.score && player.score > 0 }
        />
      ) }
      <AddPlayerForm
        addPlayer={ handleAddPlayer }
      />
    </div>
  )
}

export default App