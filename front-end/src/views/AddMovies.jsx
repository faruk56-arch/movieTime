import axios from 'axios'
import React, { Component } from 'react'

export default class AddMovies extends Component {
<<<<<<< HEAD

    constructor() {
        super()

        this.state = ({
            title: ""


        })

    };


    titleChanger = (e) => {
=======
    constructor() {
        super()
        this.state={
            title:"",
            OriginalLanguage: ""

        }
    }

    changeTitle = (e) => {
>>>>>>> ftFronend2-search
        this.setState({
            title: e.target.value
        })
    }
<<<<<<< HEAD

    addMovie = (e) => {
        alert("Movie added successfully !")

        try {
            const url = "http://localhost:8000/movies"
            axios
                .post(url)


        } catch (error) {
            console.log("error", error);
        }


    }


    render() {
        console.log("title changer", this.titleChanger);

=======
    render() {
        console.log("changeTitle", this.state.title)
>>>>>>> ftFronend2-search
        return (
            <div className="container">
                <div className="row pt-4">
                    <div className="offset-3 col-6 mx-auto">
                        <div className="alert alert-dark" role="success">
                            <h3 className="text-center">Add a new movie here !</h3>
                            {/* (The new movie was added correctly !) Quand on clique sur le bouton (Add Movie)  */}
                        </div>
                    </div>
                </div>


                <div className="row">
                </div>

                <div className="pt-3 offset-3 col-6 mx-auto">

                    <div className="mb-2 row">
                        <label htmlFor="title" className="col-sm-4 col-form-label">Title :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="title" onChange={this.state.titleChanger} />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="originalLanguage" className="col-sm-4 col-form-label">Original Language :</label>
                        <div className="col-sm-8">
                            <input type="objectId" className="form-control" id="originalLanguage" />
                        </div>
                    </div>

<<<<<<< HEAD
                    <div className="mb-2 row">
                        <label htmlFor="description" className="col-sm-4 col-form-label">Description :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="description" />
                        </div>
=======
            <div className="pt-5">

                <div className="container">
                    <h1 className="text-center pt-5">Add a movie here !</h1>
                    <div class="input-group pt-5">
                        <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="button-addon2" onChange={this.changeTitle}></input>
                        <input type="text" class="form-control" placeholder="Original Language" aria-label="Original Language" aria-describedby="button-addon2" onChange={this.changeTitle}></input>
                        <input type="text" class="form-control" placeholder="Actors" aria-label="Actors" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Authors" aria-label="Authors" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Release Date" aria-label="Release Date" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="How to find the movie" aria-label="How to find the movie" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Adress" aria-label="Adress" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Genres" aria-label="Genres" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Vote" aria-label="Vote" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Vote Count" aria-label="Vote Count" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Adult" aria-label="Adult" aria-describedby="button-addon2"></input>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
>>>>>>> ftFronend2-search
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
                            <input type="objectId" className="form-control" id="actor" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label htmlFor="author" className="col-sm-4 col-form-label">Author :</label>
                        <div className="col-sm-8">
                            <input type="objectId" className="form-control" id="author" />
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
                            <input type="objectId" className="form-control" id="genre" />
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