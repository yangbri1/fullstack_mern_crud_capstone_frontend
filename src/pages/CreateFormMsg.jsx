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
    // const [formData, setFormData] = useState({
    //     // must match "forumSchema" schema fields in backend
    //     heading: '',
    //     urgency: 0,
    //     message: '',
    //     signed: '',
    //     human: false
    // });

    // testing useState() for each props in object
    const [heading, setHeading] = useState('');
    const [urgency, setUrgency] = useState(1);
    const [message, setMessage] = useState('');
    const [signed, setSigned] = useState('');
    const [human, setHuman] = useState(false);

    /* component (event) handler functions */
    function handleClick(evt){
        // recall: `http://localhost:3000/forums/` (from controllers.mjs)
        nav('/forums');   // navigate to endpoint /forums
    }
    
    // for a checkbox -- toggle
    function handleChange(evt){
        // if input field is "human"
        if(evt.target.name == 'human'){
            setFormData({
                // spread operator to fill in missing data
                ...formData,
                // toggle 'human' field value
                // human: !formData.human
                human: true // set human to "true" value -- later validation
            });
        }
        // if its any other input fields
        else{
            setFormData({
                ...formData,
                [evt.target.name]: evt.target.value
            });
        }
    }

    // "async" (always when accessing BE) handler function to create msg to backend
    async function handleSubmit(evt){
        try {
            // prevent default behavior (refresh)
            evt.preventDefault();
            // create response
            let res = await createMsg(formData);
            // navigate to /forums after
            nav('/forums');
        } catch (err) {
            console.error(err);
        }
    }

    return(
        // React fragments to as overhead parent element else error
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="heading">
                    Heading: 
                    <input onChange={(e) => setHeading(e.target.value)} value={heading} id="heading" type="text" name="heading" alt="topic of enclosed message" placeholder="Topic" />
                </label>
                <label htmlFor="urgency">
                    Urgency: 
                    <input onChange={(e) => setUrgency(e.target.value)} value={urgency} id="urgency" type="number" name="urgency" alt="level of priority" placeholder="Degree of urgency" />
                </label>
                <label htmlFor="message">
                    Message: 
                    <input onChange={(e) => setMessage(e.target.value)} value={message} id="message" type="text" name="message" alt="message body" placeholder="Concern, idea, advice, experience, suggestion, ..." />
                </label>
                <label htmlFor="signed">
                    Signed: 
                    <input onChange={(e) => setSigned(e.target.value)} value={signed} id="signed" type="text" name="signed" alt="user id" placeholder="User ID" />
                </label>
                <label htmlFor="human">
                    Human Test: 
                    <input onChange={(e) => setHuman(e.target.value)} value={human} id="human" type="checkbox" name="human" alt="are you real?" placeholder="Captcha" />

                    {/* dropdown menu of options */}
                    {/* <select onChange={handleChange} id="human" type="text" name="human" placeholder="Captcha">
                        <option value="false">BEEP BOOP R.O.B.O.T I A.M.🤖</option>
                        <option value="true">Let me in! I'm human!!🙂</option>
                    </select> */}
                </label>
            </form>
            {/* <button onClick={handleClick}>Send It!</button> */}
            <button type="submit">Send It!</button>

        </>
    )
}   

export default CreateFormMsg;