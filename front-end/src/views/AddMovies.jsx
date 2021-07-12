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
            selectedActor: [],

            authors: [],
            selectedAuthor: [],

            adresss: [],
            selectedAdressType: [],
            selectedAdressTypeName: [],
            selectedAdressAdress: [],
        }
    }

    componentDidMount() {
        this.getGenre()
        this.getActor()
        this.getAuthor()
        this.getAdress()
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


            })
    }





    getActor() {
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


            })
    }


    getAuthor() {
        const url = "http://localhost:8000/authors"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("test authors", data);

                if (data) {
                    const options = data.map(elem => {
                        return {
                            value: elem._id,
                            label: elem.name
                        }
                    })

                    this.setState({
                        authors: options
                    })
                } else {
                    alert("There was a problem")
                }


            })
    }


    getAdress() {
        const url = "http://localhost:8000/adress"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("test adress", data);

                if (data) {
                    const options = data.map(elem => {
                        return {
                            value: elem._id,
                            // label: elem.type
                            label: elem.adress
                        }
                    })

                    this.setState({
                        adresss: options
                    })
                } else {
                    alert("There was a problem")
                }


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
                        <label htmlFor="originalLanguage" className="col-sm-4 col-form-label">Original Languages :</label>
                        <div className="col-sm-8">
                            <input type="objectId" className="form-control" id="originalLanguage" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="description" className="col-sm-4 col-form-label">Descriptions :</label>
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
                        <label htmlFor="actor" className="col-sm-4 col-form-label">Actors :</label>
                        <div className="col-sm-8">

                            <Select isMulti options={this.state.actors} onChange={(selectedOpts) => this.setState({ selectedActor: selectedOpts })} />

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="author" className="col-sm-4 col-form-label">Authors :</label>
                        <div className="col-sm-8">

                            <Select isMulti options={this.state.authors} onChange={(selectedOpts) => this.setState({ selectedAuthor: selectedOpts })} />

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="releaseDate" className="col-sm-4 col-form-label">Release Date :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="releaseDate" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="note" className="col-sm-4 col-form-label">Notes :</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="note" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="voteCount" className="col-sm-4 col-form-label">Vote counts :</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="voteCount" />
                        </div>
                    </div>

                    {/* ADRESS : type, typeName, adress */}

                    <div className="mb-2 row">
                        <label htmlFor="adress" className="col-sm-4 col-form-label">Adresses :</label>
                        <div className="col-sm-8">

                            <Select isMulti options={this.state.adresss} onChange={(selectedOpts) => this.setState({ selectedAdressType: selectedOpts })} />

                        </div>
                    </div>
                    <div className="mb-2 row">
                        <label htmlFor="adress" className="col-sm-4 col-form-label">Adresses :</label>
                        <div className="col-sm-8">

                            <Select isMulti options={this.state.adresss} onChange={(selectedOpts) => this.setState({ selectedAdressTypeName: selectedOpts })} />

                        </div>
                    </div>
                    <div className="mb-2 row">
                        <label htmlFor="adress" className="col-sm-4 col-form-label">Adresses :</label>
                        <div className="col-sm-8">

                            <Select isMulti options={this.state.adresss} onChange={(selectedOpts) => this.setState({ selectedAdressAdress: selectedOpts })} />

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="genre" className="col-sm-4 col-form-label">Genres :</label>
                        <div className="col-sm-8">

                            <Select isMulti options={this.state.genres} onChange={(selectedOpts) => this.setState({ selectedGenre: selectedOpts })} />

                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="adult" className="col-sm-4 col-form-label">Adults :</label>
                        <div className="col-sm-8">
                            <input type="boolean" className="form-control" id="adult" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <div className="col-sm-8">
                            <button className="btn-success" type="button" id="button-addon2" onClick={this.addMovie}>Add this Movie</button>

                        </div>
                    </div>







                </div>
            </div>

        )
    }
}