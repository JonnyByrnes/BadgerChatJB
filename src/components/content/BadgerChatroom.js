import React, { useContext, useEffect, useState } from "react"
import { Button, Form } from 'react-bootstrap';
import BadgerMessage from "./BadgerMessage";
import LoggedInContext from "../context/LoggedInContext.js"

export default function BadgerChatroom(props) {

    const [messages, setMessages] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [userContext, setUserContext] = useContext(LoggedInContext);

    const loadMessages = () => {
        fetch(`https://cs571.org/s23/hw6/api/chatroom/${props.name}/messages`, {
            headers: {
                "X-CS571-ID": "bid_3519fdf04c2b4bac33e3"
            }
        }).then(res => res.json()).then(json => {
            setMessages(json.messages)
        })
    };

    useEffect(() => {
        loadMessages()
    }, [props]);


    function uploadPost() {
        if (postTitle === "" || postContent === "") {
            alert("You must provide both a title and content!");
        } else {

            let url = "https://cs571.org/s23/hw6/api/chatroom/" + props.name + "/messages"
            fetch(url, {
                "method": "POST",
                "credentials": "include",
                "headers": {
                    "X-CS571-ID": "bid_3519fdf04c2b4bac33e3",
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "title": postTitle,
                    "content": postContent
                })
    
            })
            .then((response) => {
                if(response.status === 200){
                    alert("Successfully posted!");
                    loadMessages();
                }
                return response.json()
            })
    
            .then ((data) => {

            });


        }
    }


    const deleteCallback = (postID) =>{

        let url = "https://cs571.org/s23/hw6/api/chatroom/" + props.name + "/messages/" + postID
            fetch(url, {
                "method": "DELETE",
                "credentials": "include",
                "headers": {
                    "X-CS571-ID": "bid_3519fdf04c2b4bac33e3",
                    "Content-Type": "application/json"
                },
    
            })
            .then((response) => {
                if(response.status === 200){
                    alert("Successfully deleted the post!");
                    loadMessages();
                }
                return response.json()
            })
    
            .then ((data) => {
                
            });

        
    }

    return <>
        <h1>{props.name} Chatroom</h1>
        { 
            
            /* TODO: Allow an authenticated user to create a post. */
            userContext.length > 0 ?
                <>
                    {
                        /* TODO: Complete displaying of messages. */
                        <Form>
                            <Form.Label htmlFor="postTitle">Post Title</Form.Label>
                                <Form.Control 
                                    id="postTitle"
                                    value={postTitle}
                                    onChange = { (e) => {setPostTitle(e.target.value)} }
                                ></Form.Control>
                            <br/>
                            <Form.Label htmlFor="postContent">Post Content</Form.Label>
                                <Form.Control 
                                    id="postContent"
                                    value={postContent}
                                    onChange = { (e) => {setPostContent(e.target.value)} }
                                ></Form.Control>
                                <br/>
                            <Button variant="primary" onClick={() => uploadPost()}>Post</Button>
                        </Form>
                    }
                </>
                :
                <>
                    <p>You must be logged in to post!</p>
                </>
            

        }
        <hr/>
        {
            messages.length > 0 ?
                <>
                    {
                        /* TODO: Complete displaying of messages. */
                        
                        messages.map(message => <BadgerMessage key={message.id} message={message} callback={deleteCallback}></BadgerMessage>)
                    }
                </>
                :
                <>
                    <p>There are no messages in this chatroom yet!</p>
                </>
        }
    </>
}