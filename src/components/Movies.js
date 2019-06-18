import React from 'react'



const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className='button' style={{ textAlign: 'center' }} onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

class Movies extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
      year: '',
      rating: '',
      runtime: '',
      genre: '',
      director: '',
      creator: '',
      storyline: '',
      url: ''
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>

        <ul className="stacked-for-medium button-group">
          {this.props.favorites.map(item =>
            <li className='button' key={item.id.toString()} onClick={() => {
              this.setState({ url: item.posterLink, title: item.title, year: item.year, rating: item.rating, runtime: item.runtime, genre: item.genre, director: item.director, creator: item.creator, storyline: item.storyline })
              this.showModal();
            }
            }>{item.title}</li>
          )}
        </ul>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div>
            {this.state.title !== '' && (
              <div className="card" >
                <div className="card-divider input-grous">
                  <div className='input-group-field'>  {this.state.title}</div>
                  <button onClick={() => {
                    this.props.removeFavor(this.state)
                    this.hideModal()
                  }} className='input-group-label'><span style={{ color: 'red' }} className='icon icon-heart'></span></button>
                </div>
                <div className="card-section">
                  <img style={{ float: "right" }} src={this.state.url} alt="error"></img>
                  <p>Year: {this.state.year}</p>
                  <p>Rating: {this.state.contentRating}</p>
                  <p>Runtime: {this.state.runtime}</p>
                  <p>Genre: {this.state.genre}</p>
                  <p>Director: {this.state.director}</p>
                  <p>Creator: Zach</p>
                  <p>Synopsis: {this.state.storyline}</p>
                </div></div>
            )}</div>
        </Modal>

      </div>
    )
  }
}
export default Movies