import React, { useContext } from "react"
import { Button } from "react-bootstrap";
import LoggedInContext from "../context/LoggedInContext";

function BadgerMessage(props) {
    let delCallback = props.callback;
    props = props.message
    const dt = new Date(props.created);

    const [userContext, setUserContext] = useContext(LoggedInContext);

    return <>
        <h2>{props.title}</h2>
        <sub>Posted on {dt.toLocaleDateString()} at {dt.toLocaleTimeString()}</sub>
        <br/><br/>
        <i>{props.poster}</i>
        <p>{props.content}</p>


        {userContext[0] === props.poster ?
        
            <Button variant="danger" onClick={() => (delCallback(props.id))}>Delete</Button>
            
            :
            <p></p>
        }
        <br/>
        <br/>
    </>
}

export default BadgerMessage;