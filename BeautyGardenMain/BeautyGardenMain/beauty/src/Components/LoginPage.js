import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Login from '../Login';

function LoginPage() {

    
    let history = useHistory();

    const [error, setError] = useState("");
    const http = axios.create({
        baseURL: "http://localhost:3001"
      });
    const Login = details => {
        http.post('/api/auth/login', {
            username: details.email,
            password: details.password
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert('logged in successfully!');
                    localStorage.setItem("user", response.data)
                    window.location.reload();
                }else{
                    alert('Email and/or Password is incorrect')
                }
            })
            .catch(err => {
                if (err.response) {
                    alert('Email and/or Password is incorrect')
                }
            });
     }

        const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        console.log("details")
        Login(details);
    }//end const

        return (

            <div className="container" >
                <form className='white' onSubmit={submitHandler}>
                    <body>

                        <div className="input-field">
                            <label htmlFor="email">email</label>
                            <input type="text" name="emaile" placeholder="example@yahoo.com" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.name} />
                            {setError.userName && <p>{setError.email.message}</p>}
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Please enter your password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
                                styles={{ width: "300px" }} />
                            {setError.password && <p>{setError.password.message}</p>}
                        </div>

                        <div>
                            <button className="btn blue darken-3" type="submit">Submit</button>
                        </div>
                    </body>
                </form>
            </div>
            )
}

    export default LoginPage;