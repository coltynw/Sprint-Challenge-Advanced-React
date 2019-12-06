
import React from "react";

const Player = props => {
  return (
    <div className="player" data-testid="player">
      <h3>{props.name}</h3>
      <p>country: {props.country}</p>
      <p>searches: {props.searches}</p>
      <p>id: {props.id}</p>
    </div>
  );
};

export default Player; 