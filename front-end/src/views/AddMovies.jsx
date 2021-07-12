import axios from 'axios'
import Select from 'react-select'

import React, { Component } from 'react'

export default class AddMovies extends Component {

    constructor() {
        super()
        this.state = {
            genres: [],
            selectedGenre: [],
            actors: [],
            selectedActor: []
        }
    }

    componentDidMount() {
        this.getGenre()
    }

    getGenre() {
        const url = "http://localhost:8000/genres"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("test genres", data);

                if (data) {
                    const options = data.map(elem => {
                        return {
                            value: elem._id,
                            label: elem.name
                        }
                    })

                    this.setState({
                        genres: options
                    })
                } else {
                    alert("There was a problem")
                }


                // console.log("data in getGenre ", this.getGenre);
            })
    }



    getGenre() {
        const url = "http://localhost:8000/genres"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("test genres", data);

                if (data) {
                    const options = data.map(elem => {
                        return {
                            value: elem._id,
                            label: elem.name
                        }
                    })

                    this.setState({
                        genres: options
                    })
                } else {
                    alert("There was a problem")
                }


                // console.log("data in getGenre ", this.getGenre);
            })
    }

    getGenre() {
        const url = "http://localhost:8000/actors"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("test actors", data);

                if (data) {
                    const options = data.map(elem => {
                        return {
                            value: elem._id,
                            label: elem.name
                        }
                    })

                    this.setState({
                        actors: options
                    })
                } else {
                    alert("There was a problem")
                }


                // console.log("data in getGenre ", this.getGenre);
            })
    }


    render() {

        return (
            <div className="container">
                <div className="row pt-4">
                    <div className="offset-3 col-6 mx-auto">
                        <div className="alert alert-dark" role="success">
                            <h3 className="text-center">Add a new movie here !</h3>

                        </div>
                    </div>
                </div>


                <div className="row">
                </div>

                <div className="pt-3 offset-3 col-6 mx-auto">

                    <div className="mb-2 row">
                        <label htmlFor="title" className="col-sm-4 col-form-label">Title :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="title" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="originalLanguage" className="col-sm-4 col-form-label">Original Language :</label>
                        <div className="col-sm-8">
                            <input type="objectId" className="form-control" id="originalLanguage" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="description" className="col-sm-4 col-form-label">Description :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="description" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="image" className="col-sm-4 col-form-label">Image :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="image" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="actor" className="col-sm-4 col-form-label">Actor :</label>
                        <div className="col-sm-8">
                            <Select isMulti options={this.state.actors} onChange={(selectedOpts) => this.setState({ selectedActor: selectedOpts })} />

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="author" className="col-sm-4 col-form-label">Author :</label>
                        <div className="col-sm-8">

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="releaseDate" className="col-sm-4 col-form-label">Release Date :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="releaseDate" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="note" className="col-sm-4 col-form-label">Note :</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="note" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="voteCount" className="col-sm-4 col-form-label">Vote count</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="voteCount" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="adress" className="col-sm-4 col-form-label">Adress :</label>
                        <div className="col-sm-8">
                            <input type="objectId" className="form-control" id="adress" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="genre" className="col-sm-4 col-form-label">Genre :</label>
                        <div className="col-sm-8">
                            <Select isMulti options={this.state.genres} onChange={(selectedOpts) => this.setState({ selectedGenre: selectedOpts })} />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="adult" className="col-sm-4 col-form-label">Adult :</label>
                        <div className="col-sm-8">
                            <input type="boolean" className="form-control" id="adult" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <div className="col-sm-8">
                            <button className="btn-success" type="button" id="button-addon2" onClick={this.addMovie}>Add Movie</button>

                        </div>
                    </div>







                </div>
            </div>

        )
    }
}