import React, { useState, useEffect } from "react";
import { Link , useHistory } from "react-router-dom";
import 'firebase/compat/auth';
import axios from "axios";

export default function ForgotPassword() {

    const history = useHistory();
    const [email, setEmail] = useState('');

    const sendEmail = (event)=>{
        const url = "http://localhost:3001/forgotpassword/"+email;
        const config = 
            {
                headers : {
                    Authorization : "Edumeet edumeet"
                }
            }
        axios.post(url,{},config)
        .then((res) => {
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

            <h3>Forgot Password</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="form-control" placeholder="Enter email" />
            </div>

            <button type="submit" onClick={sendEmail} className="btn btn-dark btn-lg btn-block">Send Email</button>

        </div>
    );
}