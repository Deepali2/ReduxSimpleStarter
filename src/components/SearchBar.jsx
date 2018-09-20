import React from 'react';
// import style from "./styles/style.css";

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value : event.target.value});
  }
  render() {
    return (
      <input placeholder='type in a video name' value={this.state.value} onChange={this.handleChange}/> 
    );
    
  }
}



export default SearchBar;