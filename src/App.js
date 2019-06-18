import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import CustomNavLink from './components/CustomLink';

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
    const index = this.state.favorites.indexOf(item)
    const array = this.state.favorites.slice();
    array.splice(index, 1)
    this.setState({ favorites: array })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>Movie Favorites</header>
          <ul className="menu">
            <li className={'is-active'} onClick={() => this.setState({ pageNum: 'home' })}>
              <CustomNavLink to='/' activeOnlyWhenExact={true} label="Home" />
            </li>
            <li onClick={() => this.setState({ pageNum: 'movies' })} >
              <CustomNavLink to='/Movies' activeOnlyWhenExact={true} label="Movies" />
            </li>
          </ul>
          <Switch>
            <Route exact path='/' render={() => <Home favorites={this.state.favorites} addToFavor={this.addToFavor} removeFavor={this.removeFavor} />} />
            <Route path='/movies' render={() => <Movies favorites={this.state.favorites} removeFavor={this.removeFavor} />} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
