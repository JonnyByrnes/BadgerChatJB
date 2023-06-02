import React from 'react';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedInContext from '../context/LoggedInContext';

export default function BadgerLogin() {

    // TODO Create the login component.
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [userContext, setUserContext] = useContext(LoggedInContext);

      function handleSubmit(event) {
        event.preventDefault();
        //alert('A username was submitted: ' + username.current.value + " with password: " + password.current.value );
        if (username.current.value === "" || password.current.value === "") {
            alert("You must provide both a username and password!");
        }

        fetch("https://www.cs571.org/s23/hw6/api/login", {
            "method": "POST",
            "credentials": "include",
		    "headers": {
			    "X-CS571-ID": "bid_3519fdf04c2b4bac33e3",
                "Content-Type": "application/json"
		    },
            "body": JSON.stringify({
                username : username.current.value,
                password : password.current.value
            })

	    })
	    .then((response) => {
            if(response.status === 200){
                alert("Login was Successful!");
                setUserContext([username.current.value])
                navigate('/'); 
            }else if(response.status === 401){
                alert("Incorrect Password!");
            } else if(response.status === 404){
                alert("Username not found!");
            }else {
                //alert("response code of: " + response.status);
            }
            return response.json();
        })

	    .then ((data) => {
            
	    });

      }


    return <>
    
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <br/>
                <input type="text" ref={username} />
            </label>
            <br/>
            <br/>
            <label>
                Password:
                <br/>
                <input type="text" ref={password} />
            </label>
            <br/>
            <br/>
        <input type="submit" value="Login" />
      </form>
    </>
}