import React, { Component } from 'react';

class Player extends Component {
  render() {
    return(
      <div>
        <p>Player: {this.props.match.params.number}</p>
      </div>
    );
  }
}

export default Player;
