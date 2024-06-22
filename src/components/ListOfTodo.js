import axios from "axios";
import React, { useEffect } from "react";
import { useLocation , useHistory} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function ListOfTodo(props){
    const location = useLocation();
    const history = useHistory();
    let token;

    useEffect(()=>{
        if(localStorage.auth === 'true'){
            console.log("token", location.state.token);
            fetchData(location.state.token);
            token = location.state.token;
        }else{
            history.push('/sign-in');
        }
        
    },[token]);

    const fetchData = async (token)=>{
        console.log(token);
        const res = await axios.get('http://localhost:3001/user/sahinismail0618@gmail.com',{
            headers:{
                Authorization: 'Edumeet ' + token
            }
        })
        console.log(res);
    }

    const logout = async () =>{
        firebase
        .auth()
        .signOut()
        .then((resp)=>{
          console.log("signout is done");
          window.localStorage.setItem('auth','false');
          window.location.reload();
        }).catch((error)=>{
          console.log(error);
        })
    }

    return (
        <div>
            <h1>List of todo </h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}