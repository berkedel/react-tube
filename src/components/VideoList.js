import React, { Component } from 'react';

class VideoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="col-md4 list-group">
        { this.props.videos.length }
      </ul>
    );
  }

}

export default VideoList;