import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const videoItems = this.props.videos.map(video => {
      return (
        <VideoListItem
          onVideoSelect={ video => this.props.onVideoSelect(video) }
          key={ video.etag }
          video={ video } />
      );
    });

    return (
      <ul className="col-md-4 list-group">
        { videoItems }
      </ul>
    );
  }

}

export default VideoList;
