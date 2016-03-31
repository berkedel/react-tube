import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import { youtubeSearch } from '../helpers';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    youtubeSearch('reactjs', videos => this.setState({ videos }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  };
};

export default App;
