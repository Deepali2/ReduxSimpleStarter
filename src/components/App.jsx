import React from 'react';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx'
import YTSearch from 'youtube-api-search';
import {YOUTUBE_API_KEY} from '../config/youtube.js';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      videos:[],
      
    };
    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboard'}, (videos) => this.setState({videos}));
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
  
}

export default App;