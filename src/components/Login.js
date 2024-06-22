import React, { useState, useEffect } from "react";
import { Link , useHistory } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Login() {

    const history = useHistory();

    const [auth,setAuth] =  useState(false || window.localStorage.getItem('auth') === 'true');
    const [token,setToken] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    useEffect(()=>{
        if(window.localStorage.auth === 'false'){
            setAuth(false);
            setToken('');
        }
        firebase.auth().onAuthStateChanged((userCred)=>{
            if(userCred){
            console.log("userCred");
            console.log(userCred);
            setAuth(true);
            window.localStorage.setItem('auth','true');
            userCred.getIdToken().then((token)=>{
                setToken(token);
            })
            }
        });
    },[]);

    const signinWithEmail = (event)=>{
        firebase
          .auth()
          .signInWithEmailAndPassword(email,password)
          .then((resp)=>{
            history.push({
                pathname: "/list-of-todo",
                state: {
                    token: token
                }
            });
          }).catch((error)=>{
            alert(error);
          })
      }

    return (
        <div >

            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" onClick={signinWithEmail} className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                    Have not registered yet...
                    <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
                </p>
            <p className="forgot-password text-right">
                <Link className="nav-link" to={"/forgot-password"}>Forgot Password</Link>   
            </p>
        </div>
    );
}