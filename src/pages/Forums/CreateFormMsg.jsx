// import useState() hook for state to hold formData
import { useState } from "react";
// bring in createMsg() from utilities to get "Forum" from MongoDB backend
// import { createMsg } from "../utilities/controllers.mjs";
// import useNavigate() hook to navigate elsewhere upon presence of events (interactions) 
// <Link> component from react-router-dom requires a button, useNavigate() does NOT
import { useNavigate } from "react-router-dom";

// incorporate axios library to fetch data from backend
import axios from 'axios';

function CreateFormMsg(){
    // prepare an instance of useNavigate() for later use
    const nav = useNavigate();

    // declare an state w/ initial values of ...
    const [formData, setFormData] = useState({
        // must match "forumSchema" schema fields in backend
        heading: '',
        urgency: 1,
        message: '',
        signed: '',
        human: false
    });

    // testing useState() for each props in object
    // const [heading, setHeading] = useState('');
    // const [urgency, setUrgency] = useState(1);
    // const [message, setMessage] = useState('');
    // const [signed, setSigned] = useState('');
    // const [human, setHuman] = useState(false);

    /* component (event) handler functions */
    // function handleClick(event){
    //     // recall: `http://localhost:3000/forums/` (from controllers.mjs)
    //     nav('/forums');   // navigate to endpoint /forums
    // }
    
    // for a checkbox -- toggle
    function handleChange(event){
        // if input field is "human"
        if(event.target.type == 'checkbox'){
            setFormData({
                // spread operator to fill in missing data
                ...formData,
                human: event.target.checked // set key "human" to event.target.checked -- "checked" b/c it's a checkbox
            });
        }
        // if its any other input fields
        else{
            setFormData({
                ...formData,
                // access rest of keys in obj {} using [] notation & establish value to inputted event.target.value
                [event.target.name]: event.target.value
            });
        }
    }

    // "async" (always when accessing BE) handler function to create msg to backend
    async function handleSubmit(event){
        // prevent default behavior (refresh)
        event.preventDefault();
        try {
            // create response
            // let res = await createMsg(formData);
            const res = await axios.post('http://localhost:3000/forums', formData);
            // const res = await axios.post('http://localhost:3000/forums', {
            //     heading, urgency, message, signed, human,
            // });
            console.log("Message created successfully", res);
            // navigate to /forums after
            nav('/forums');
        } catch (err) {
            console.error(err);
        }
    }

    return(
        // React fragments to as overhead parent element else error
        <>
            <h1>Create Forum Message</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="heading">
                    <h3>
                        Heading:{"\t"}
                        <input value={formData.heading} onChange={handleChange} id="heading" type="text" name="heading" alt="topic of enclosed message" placeholder="Topic" required />
                    </h3> 
                </label>
                {/* <br /> */}
                <label htmlFor="urgency">
                    <h3>
                        Urgency: {" "}
                        <input value={formData.urgency} onChange={handleChange} id="urgency" type="number" name="urgency" alt="level of priority" placeholder="Degree of urgency" required />
                    </h3>
                </label>
                {/* <br /> */}
                <label htmlFor="message">
                    <h3>
                        Message: {" "}
                        <textarea value={formData.message} onChange={handleChange} id="message" type="textarea" name="message" alt="message body" placeholder="Concerns, ideas, advices, ..." required 
                                        />
                    </h3>
                    
                </label>
                {/* <br /> */}
                <label htmlFor="signed">
                    <h3>
                        Signed: {" "}
                        <input value={formData.signed} onChange={handleChange} id="signed" type="text" name="signed" alt="user id" placeholder="User ID" />
                    </h3>
                   
                </label>
                {/* <br /> */}
                <label htmlFor="human">
                    <h3>
                        Human Test: {" "}
                        {/* Notice: "checked" property here instead of "value" as this is of type checkbox */}
                        <input checked={formData.human} onChange={handleChange} id="human" type="checkbox" name="human" alt="are you real?" placeholder="Captcha" />
                    </h3>
    
                    {/* dropdown menu of options */}
                    {/* <select onChange={handleChange} id="human" type="text" name="human" placeholder="Captcha">
                        <option value="false">BEEP BOOP R.O.B.O.T I A.M.🤖</option>
                        <option value="true">Let me in! I'm human!!🙂</option>
                    </select> */}
                </label>
                {/* <br /> */}
                {/* <button onClick={handleClick}>Send It!</button> */}
                <button id="forum-btn"type="submit">Send It!</button>

            </form>
        </>
    )
}   

export default CreateFormMsg;