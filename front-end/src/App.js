import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Homepage from './views/Homepage'
import Welcome from './views/Welcome'
import Contact from './views/Contact'
import About from './views/About'
import AddMovies from './views/AddMovies'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {

        return (
            <BrowserRouter>

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <h3 className="text-danger" to="/">MovieTime</h3>
                            <div>

                                <div className="float-sm-end">

                                </div>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/homepage" className="nav-link active">Homepage</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/welcome" className="nav-link">Welcome</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/add-movies" className="nav-link">AddMovies</Link>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                        </div>
                    </nav>

                    <div class="input-group mb-3 pt-5">
                        <input type="text" class="form-control" placeholder="Type a movie's name" aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input>
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/welcome" component={Welcome} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/add-movies" component={AddMovies} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
