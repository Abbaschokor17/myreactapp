import React from 'react'

// Stylesheet

import '../App.css';

/**
 * ImageCard.
 * Simple generic ImageCard. Receives a image thumb as prop.
 */
class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: null }
  }

  
  render() {
    return (
      <div className="image-card">
        <img
          src={this.props.thumb}
          width='300'
          height='240'
        />
      </div>
    )
  }
}

export default ImageCard
