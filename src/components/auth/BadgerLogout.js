import React, { useEffect, useContext } from 'react';
import LoggedInContext from '../context/LoggedInContext';

export default function BadgerLogout() {

    const [userContext, setUserContext] = useContext(LoggedInContext);

    useEffect(() => {
        fetch('https://cs571.org/s23/hw6/api/logout', {
            method: 'POST',
            headers: {
                "X-CS571-ID": "bid_3519fdf04c2b4bac33e3"
            },
            credentials: "include"
        }).then(res => res.json()).then(json => {
            // Maybe you need to do something here?
            setUserContext([]);
        })
    }, []);

    return <>
        <h1>Logout</h1>
        <p>You have been successfully logged out.</p>
    </>
}