import React from 'react';
import "./Card.css"

class Card2 extends React.Component {
    render() {
        return (
            <div className="Card2">

                <img src={this.props.image} />
                <p> title:{this.props.title}</p>
                <p> description:{this.props.description}</p>
                <p> adult:{this.props.adult ? 'yes' : 'no'}</p>
                <p>Note:{this.props.note}</p>
                <p> voteCount:{this.props.voteCount}</p>
                <p> genre:{this.props.genre}</p>
                <p>author:{this.props.author}</p>
                <p>actor:{this.props.actor}</p>
                <p>releaseDate:{this.props.releaseDate}</p>
                <p>adress:{this.props.adress}</p>
                <p> originalLanguage:{this.props.originalLanguage}</p>


            </div>
        )
    }
}
export default Card2;
