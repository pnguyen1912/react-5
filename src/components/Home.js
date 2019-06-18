import React from 'react'
import axios from 'axios'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      movies: [],
      status: 'done',
    }
  }

  searchMovies = () => {
    this.setState({ status: 'finding' })
    axios.get(`http://freemdb.com/api/v1/Movies?Title=${this.state.input}`)
      .then(response => {
        if (response.data.items.length > 0) {

          let newState = response.data.items.map(e => {
            if (this.props.favorites.includes(e)) {
              return {
                title: e.title,
                year: e.year,
                contentRating: e.contentRating,
                country: e.country,
                creator: e.creator,
                genre: e.genre,
                id: e.id,
                language: e.language,
                posterLink: e.posterLink,
                runtime: e.runtime,
                starRating: e.starRating,
                storyline: e.storyline,
                favor: true
              }
            }
            else {
              return e
            }

          }
          )
          this.setState({ movies: newState, status: 'done' })
        }
        else {
          this.setState({ status: 'none' })
        }
        console.log(this.state.movies)

      })
      .catch(err => {
        console.log(err)
      })
  }





  render() {
    return (
      <div>
        <div className='input-group'>
          <input type="text"
            className='input-group-field'
            value={this.state.temp}
            onChange={e => this.setState({ input: e.target.value })}
            onKeyDown={e => e.key === 'Enter' ? this.searchMovies() : null} >
          </input> <div className='input-group-button'><button className="button"><span onClick={this.searchMovies} style={{ float: 'right' }} className='icon icon-search' ></span></button>
          </div></div>
        {this.state.status === 'done' && (
          <div>

            {this.state.movies.map(item =>
              <div key={item.id.toString()} className="card" >
                <div className="card-divider input-grous">
                  <div className='input-group-field'>  {item.title}</div>
                  <button onClick={this.props.favorites.includes(item) || item.favor ? () => this.props.removeFavor(item) : () => this.props.addToFavor(item)} className='input-group-label'><span style={{ color: this.props.favorites.includes(item) || item.favor ? 'red' : 'black' }} className='icon icon-heart'></span></button>
                </div>
                <div className="card-section">
                  <img style={{ float: "right" }} src={item.posterLink} alt="error"></img>
                  <p>Year: {item.year}</p>
                  <p>Rating: {item.contentRating}</p>
                  <p>Runtime: {item.runtime}</p>
                  <p>Genre: {item.genre}</p>
                  <p>Director: {item.director}</p>
                  <p>Creator: Zach</p>
                  <p>Synopsis: {item.storyline}</p>
                </div></div>
            )}
          </div>
        )}


        {this.state.status === 'finding' && (
          <div style={{ textAlign: "center" }}>
            <span className="loading-indicator"></span>
          </div>
        )}
        {this.state.status === 'none' && (
          <div>
            We couldn't find that movie
            </div>
        )}


      </div>
    )
  }
}
export default Home