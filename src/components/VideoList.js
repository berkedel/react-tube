import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const videoItems = this.props.videos.map(
      video => {
        return <VideoListItem key={ video.etag } video={ video } />
      }
    );

    return (
      <ul className="col-md4 list-group">
        { videoItems }
      </ul>
    );
  }

}

export default VideoList;
