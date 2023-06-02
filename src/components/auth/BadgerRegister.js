import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoggedInContext from '../context/LoggedInContext';

export default function BadgerRegister() {

    // TODO Create the register component.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [userContext, setUserContext] = useContext(LoggedInContext);
    const navigate = useNavigate();

    function attemptRegister() {
        if (username === "" || password === "" || verifyPassword === "") {
            alert("You must provide both a username and password!")
            return
        }
        if (password !== verifyPassword) {
            alert("Your passwords do not match!")
            return
        }

        fetch("https://www.cs571.org/s23/hw6/api/register", {
            "method": "POST",
            "credentials": "include",
		    "headers": {
			    "X-CS571-ID": "bid_3519fdf04c2b4bac33e3",
                "Content-Type": "application/json"
		    },
            "body": JSON.stringify({
                "username": username,
                "password": password
            })

	    })
	    .then((response) => {
            if(response.status === 200){
                alert("Registration was Successful!") 
                setUserContext([username])
                navigate('/')  
            }else if(response.status === 409){
                alert("That username has already been taken!")
            }
            return response.json()
        })

	    .then ((data) => {

	    });

    }

    return <div>
        <h1>Register</h1>

        <Form>
            <Form.Label htmlFor="username">Name</Form.Label>
                <Form.Control 
                    id="username"
                    value={username}
                    onChange = { (e) => {setUsername(e.target.value)} }
                ></Form.Control>

            <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                    id="password"
                    value={password}
                    onChange = { (e) => {setPassword(e.target.value)} }
                ></Form.Control>

            <Form.Label htmlFor="verifyPassword">Verify Password</Form.Label>
                <Form.Control 
                    id="verifyPassword"
                    value={verifyPassword}
                    onChange = { (e) => {setVerifyPassword(e.target.value)} }
                ></Form.Control>
            <br/>
            <Button variant="primary" onClick={() => attemptRegister()}>Register</Button>
        </Form>
    </div>
}