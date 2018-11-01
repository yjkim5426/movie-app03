import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={}

  callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
  }

  getMovies = async () => {
    const movies = await this.callApi();
    console.log(movies);
    this.setState({
      movies
    })
  }

  renderMovies = () => {
    const movies = this.state.movies.map( movie =>
      <><h1>{movie.title}</h1><img src={movie.small_cover_image} /></>
    );
    return movies
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render() {
    return (
      <div className="App">
        {this.state.movies ? this.renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;