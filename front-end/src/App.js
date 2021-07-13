import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Homepage from './views/Homepage'
import Contact from './views/Contact'
import About from './views/About'
import AddMovies from './views/AddMovies'
import Login from './views/Login'
import Signup from './views/Signup'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    constructor() {
        super()


        this.state = {
            userToken: this.getLocalStorage(),
            informDisconnection : false,

        }
    }

    getLocalStorage() {
        const token = localStorage.getItem('token') || "";
        return token
    }

    logOut() {
        localStorage.removeItem("token")
        this.setState({
            userToken: "",
            informDisconnection: true,
        });
        setTimeout(() => {
            this.setState({
                informDisconnection: false,
            });
        }, 3000)
      
    }

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
                                            <Link to="/" className="nav-link active">Homepage</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link">About</Link>
                                        </li>
                                        {this.state.userToken === "" ? (
                                            <>
                                                <li className="nav-item">
                                                    <Link to="/login" className="nav-link">Log In</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/signup" className="nav-link">Sign Up</Link>
                                                </li>
                                            </>
                                        ) :
                                            (
                                                <>
                                                    {/* <li className="nav-item">
                                                        <Link to="/add-movies" className="nav-link">AddMovies</Link>
                                                    </li> */}
                                                    <li className="nav-item">
                                                        <Link to="" className="nav-link" onClick={() => this.logOut()}>Log Out</Link>
                                                    </li>
                                                </>
                                            )}



                                    </ul>


                                </div>
                            </div>
                        </div>
                    </nav>
                    {this.state.informDisconnection &&
                    <div className="row">
                        <div className="offset-3 col-6 mx-auto">
                            <div className="alert alert-danger" role="alert">
                                User logged out successfully ! 
                            </div>
                        </div>
                    </div>
                }

                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/add-movies" component={AddMovies} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
