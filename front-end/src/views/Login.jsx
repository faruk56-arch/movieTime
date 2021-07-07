import React, { Component } from 'react'
import axios from 'axios'


export default class Login extends Component {

// getLogin = () => {

//     fetch('http://localhost:8000/auth/login',
//      {method:'GET', 
// headers: {'Authorization': 'Basic ' + btoa('login:password')}})
// .then(response => response.json())
// .then(json => console.log(json));
// }

    render() {
        return (

            <div className="pt-5">

                <div className="container">
                    <h1 className="text-center pt-5">Already subscribed? Please Log in</h1>
                    <div class="input-group pt-5">
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="button-addon2"></input>
                    </div>
                    <div class="input-group pt-5">
                        <input type="password" class="form-control" placeholder="password" aria-label="Name" aria-describedby="button-addon2"></input>
                    </div>
                    <div className="d-flex justify-content-center pt-4">

                        <button className="btn btn-secondary" >log in</button>
                    </div>
                </div>
            </div>

        )
    }
}
