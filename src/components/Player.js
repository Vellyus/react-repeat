import React, { memo } from "react"
import Counter from "./Counter"
import PropTypes from "prop-types"

const Player = ({ removePlayer, id, score, changeScore, name }) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
        { name }
      </span>

      <Counter
        id={ id }
        score={ score }
        changeScore={ changeScore }
      />
    </div>
  )
}

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  removePlayer: PropTypes.func,
  changeScore: PropTypes.func
}

export default memo(Player, playerPropsAreEqual)