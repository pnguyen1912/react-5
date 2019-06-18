import React from 'react'

export default class Movies extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      favorites: this.props.favorites
    }
    console.log(this.state.favorites)
  }



  render() {
    return (
      <div>
        <ul className="vertical menu">
          {this.props.favorites.map(item =>
            <li key={item.id.toString()}>{item.title}</li>
          )}
        </ul>
      </div>
    )
  }
}