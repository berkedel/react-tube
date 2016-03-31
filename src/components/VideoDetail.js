import React, { Component } from 'react';

class VideoDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const videoId = this.props.video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    const videoTitle = this.props.video.snippet.title;
    const videoDesc = this.props.video.snippet.description;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={ videoUrl }></iframe>
        </div>

        <div className="details">
          <div>{ videoTitle }</div>
          <div>{ videoDesc }</div>
        </div>
      </div>
    );
  }

}

export default VideoDetail;
