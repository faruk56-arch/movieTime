import React from 'react';
// import "./Card.css"
import "./Card2.css"


class Card2 extends React.Component {
    render() {
        return (
            <div className="Card2">

                <img src={this.props.image} />
                <p> Title :  {this.props.title}</p>
                <p> Description :  {this.props.description}</p>
                <p> Adult :  {this.props.adult ? 'yes' : 'no'}</p>
                <p>Note :  {this.props.note}</p>
                <p>Number of votes so far :  {this.props.voteCount}</p>
                <p>Genres :  {this.props.genre}</p>
                <p>Authors :  {this.props.author}</p>
                <p>Actors :  {this.props.actor}</p>
                <p>Release Date :  {this.props.releaseDate}</p>
                <p>Support :  {this.props.support}</p>
                {/* <p>Name :  {this.props.name}</p> */}
                <p>Where to find : {this.props.whereToFind}</p>
                <p>Original Language :  {this.props.originalLanguage}</p>

            </div>
        )
    }
}
export default Card2;
