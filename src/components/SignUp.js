import React from "react";
import { Link , useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUp(props) {

    
        const history = useHistory();


        function handleSubmit (event) {
            event.preventDefault()
            console.log(event.target.username.value);
            const url = "http://localhost:3001/register";
            const data = 
                {
                    "email" : event.target.email.value,
                    "password" : event.target.password.value,
                    "name" : event.target.username.value,
                    "surname" : event.target.lastname.value,
                    "university" : event.target.university.value,
                    "age" : event.target.age.value,
                    "gender" : event.target.gender.value
                }
            const config = 
                {
                    headers : {
                        Authorization : "Edumeet edumeet"
                    }
                }
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
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="username" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastname" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>University</label>
                    <input type="text" name="university" className="form-control" placeholder="Enter your university" />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="number" name="age" className="form-control" placeholder="Enter your age" />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select type="text" name="gender" className="form-control" placeholder="Your gender">
                        <option value="not-selected">Select Your Gender</option>
                        <option value="lime">Male</option>
                        <option value="coconut">Female</option>
                        <option value="mango">None</option>
                    </select>
                    
                </div>
                                                
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered...
                    <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
                </p>
            </form>
        );
}