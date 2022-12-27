import React, { memo } from "react"
import Counter from "./Counter"

const Player = (props) => {
  return (
    <div className="player">
      { console.log(props.name + "rendered") }
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        { props.name }
      </span>

      <Counter
        id={ props.id }
        score={ props.score }
        changeScore={ props.changeScore }
      />
    </div>
  )
}

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score
}

export default memo(Player, playerPropsAreEqual)