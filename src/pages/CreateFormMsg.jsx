// import useState() hook for state to hold formData
import { useState } from "react";
// bring in createMsg() from utilities to get "Forum" from MongoDB backend
import { createMsg } from "../utilities/controllers.mjs";
// import useNavigate() hook to navigate elsewhere upon presence of events (interactions) 
// <Link> component from react-router-dom requires a button, useNavigate() does NOT
import { useNavigate } from "react-router-dom";

function CreateFormMsg(){
    // prepare an instance of useNavigate() for later use
    const nav = useNavigate();

    // declare an state w/ initial values of ...
    const [formData, setFormData] = useState({
        // must match "forumSchema" schema fields in backend
        heading: '',
        urgency: 0,
        message: '',
        signed: '',
        human: false
    });

    /* component (event) handler functions */
    function handleClick(evt){
        // recall: `http://localhost:3000/forums/` (from controllers.mjs)
        nav('/');   // /forums endpoint
    }

    // function handleChange(evt){
    //     if(evt.target.name == '')
    // }
}   

