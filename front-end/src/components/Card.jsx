import React from 'react';
import "./Card.css"

class Card extends React.Component {
    render() {
        return (
            <div className="card">

                <img src={this.props.image} />
                <h5 className="card-title">{this.props.title}</h5>
                <p>{this.props.description}</p>


            </div>
        )
    }
}
export default Card;
