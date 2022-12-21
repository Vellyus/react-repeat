import React from "react"
import Header from "./Header"
import Player from "./Player"
import AddPlayerForm from "./AddPlayerForm"
import { useState } from "react"

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

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id))
  }

  const handleAddPlayer = (name) => {
    setPlayers(prevPlayers => [...prevPlayers, {
      name,
      id: players.length + 1,
      score: 0
    }])
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
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
        />
      ) }
      <AddPlayerForm
        addPlayer={ handleAddPlayer }
      />
    </div>
  )
}

export default App