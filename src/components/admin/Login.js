import React, { useEffect, useState } from "react";
import Axios from "axios";

// const host = 'http://localhost:3001/api/login';
const host = 'https://i2b-dz.com/api/login';

function Login({onLogin}) {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);
  const [loginMessage, setLoginMessage] = useState("You're Out!");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post(host, {
      email: email,
      pwd: pwd,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(false);
        setLoginMessage(response.data.message);
        // console.log(response.data.message)
      } else {
        // console.log(response.data)
        setLoginStatus(true);
        onLogin();
      }
    });
  };

  useEffect(() => {
    Axios.get(host).then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(true);
        window.location.href = "/";
      }
    });
  }, []);

  return (
    <>
    
    <section className="top-v5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 align-self-center">
                        <div className="home2-top-right text-align-center">
                            <h2>Login page</h2>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 offset-md-4 centered-col'>
          <form>
          <h3>{loginMessage}</h3>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" 
                     className="form-control" 
                     id="email" 
                     aria-describedby="emailHelp" 
                     placeholder="Enter email" 
                     onChange={(e) => {
                      setEmail(e.target.value);
                    }}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" 
                     className="form-control" 
                     id="pwd" 
                     placeholder="Password" 
                     onChange={(e) => {
                      setPwd(e.target.value);
                    }}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" >Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
          </form>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Login
