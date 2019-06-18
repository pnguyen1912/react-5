import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: 'home',
      favorites: []
    }
  }

  addToFavor = (item) => {
    this.setState({ favorites: [...this.state.favorites, item] })
  }

  removeFavor = (item) => {
    let newArray = this.state.favorites.slice();
    newArray.splice(item, 1)
    this.setState({ favorites: newArray })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>Movie Favorites</header>
          <ul className="menu">
            <li className={this.state.pageNum === 'home' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'home' })}> <Link style={{ paddingLeft: '20px' }} to='/' params="" >Home</Link></li>
            <li className={this.state.pageNum === 'movies' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'movies' })} ><Link style={{ paddingLeft: '20px' }} to='/Movies'>Movies</Link></li>
          </ul>
          <Route exact path='/' render={() => <Home favorites={this.state.favorites} addToFavor={this.addToFavor} removeFavor={this.removeFavor} />} />
          <Route path='/movies' render={() => <Movies favorites={this.state.favorites} removeFavor={this.removeFavor} />} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
