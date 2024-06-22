import React, { useState, useEffect } from "react";
import { Link , useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function UpdatePassword() {
    const [email, setEmail] = useState('');
    const [oldpassword, setOldPassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [newpassword2, setNewpassword2] = useState('');

    const history = useHistory();

    const search = useLocation().search;

    const updatePassword = (event)=>{
        event.preventDefault()
        const url = "http://localhost:3001/password";
        const data = 
            {
                "email" : email,
                "password" : oldpassword,
                "newpassword" : newpassword,
                "uid" : new URLSearchParams(search).get('id')
            }
        const config = 
            {
                headers : {
                    Authorization : "Edumeet edumeet"
                }
            }
            console.log(data);
        axios.post(url,data,config)
        .then((res) => {
            console.log(res.data.status);
            if(res.data.status === "error"){
                throw res.data.message;
            }
            console.log("RESPONSE RECEIVED: ", res);
            history.push("/sign-in")
          })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            alert(err);
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
                <label>Old Password</label>
                <input type="password" value={oldpassword} onChange={e => setOldPassword(e.target.value)} name="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>New Password</label>
                <input type="password" value={newpassword} onChange={e => setNewpassword(e.target.value)} name="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>New Password Again </label>
                <input type="password" value={newpassword2} onChange={e => setNewpassword2(e.target.value)} name="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" onClick={updatePassword} className="btn btn-dark btn-lg btn-block">Update Password</button>

        </div>
    );
}