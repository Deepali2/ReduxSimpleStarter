import React from 'react';
import SearchBar from './SearchBar.jsx';
import YTSearch from 'youtube-api-search';
import {YOUTUBE_API_KEY} from '../config/youtube.js';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      videos:[]
    };
    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => this.setState({videos}));
  }
  render() {
    console.log(this.state.videos);
    return (
      <div> <SearchBar /></div>
    );
  }
  
}

export default App;