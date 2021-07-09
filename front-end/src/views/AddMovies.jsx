import React, { Component } from 'react'

export default class AddMovies extends Component {
    render() {

        return (
            <div className="container">
                <div className="row pt-4">
                    <div className="offset-3 col-6 mx-auto">
                        <div className="alert alert-dark" role="success">
                            <h3 className="text-center">
                                Add a new movie here !
                            </h3>
                            {/* (The new movie was added correctly !) Quand on clique sur le bouton Add  */}
                        </div>
                    </div>
                </div>


                <div className="row">
                </div>

                <div className="pt-3 offset-3 col-6 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="title" className="col-sm-4 col-form-label">Title</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="title" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="color" className="col-sm-4 col-form-label">Color</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="color" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="voteCount" className="col-sm-4 col-form-label">Vote count</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="Vote count" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
