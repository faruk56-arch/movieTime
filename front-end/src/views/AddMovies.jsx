import React, { Component } from 'react'

export default class AddMovies extends Component {
    render() {
        return (

            <div>

                <div className="container">
                    <h1 className="text-center pt-5">Add a movie here !</h1>
                    <div class="input-group pt-5">
                        <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Original Language" aria-label="Original Language" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Actors" aria-label="Actors" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Authors" aria-label="Authors" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Release Date" aria-label="Release Date" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="How to find the movie" aria-label="How to find the movie" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Adress" aria-label="Adress" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Genres" aria-label="Genres" aria-describedby="button-addon2"></input>
                        <input type="text" class="form-control" placeholder="Adult" aria-label="Adult" aria-describedby="button-addon2"></input>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
                    </div>
                </div>
            </div>

        )
    }
}
