import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { findOneMsg, updateMsg } from "../../utilities/controllers.mjs";

function UpdateFormMsg(){
    // initialize useNavigate() hook for use
    const nav = useNavigate();
    // destructure out unique "_id" from URL
    const { id } = useParams();
    // create a state with initial value of null -- to hold incoming form data
    const [formData, setFormData] = useState(null);

    // using useEffect() hook to grab fetch data from backend
    useEffect(() => {
        // "async" function to retrieve data from backend
        async function getData(){
            // invoke findOneMsg() function to axios.get() one forum msg by unique "_id"
            let data = await findOneMsg(id);
            // 'axios' takes care of translating response to .json() format inherently, so here just set it to state
            setFormData(data);
        }
        // invoke getData() to actually fetch from db
        getData();
    }, []); // dependencies list/array empty [] -- render only once

    function handleClick(event){
        nav('/forums');
    }

    function handleChange(event){
        // destructure out some attributes from event.target
        const { name, type, value, checked } = event.target;
        if(type === 'checked'){
            setFormData({
                ...formData,
                human: checked
            });
        }
        else{
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    async function handleSubmit(event){
        event.preventDefault();
        try {
            let res = await updateMsg(id, formData);
            console.log("Message updated successfully", res);
            nav('/forums');
        } catch (err) {
            console.error(err);
        }
    }
    
    return(
        <>
            <div>
                <h2>Update Forum Message</h2>
                {formData ? (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="heading">
                    Heading: {" "}
                    <input value={formData.heading} onChange={handleChange} id="heading" type="text" name="heading" alt="topic of enclosed message" placeholder="Topic" required />
                    
                </label>
                <br />
                <label htmlFor="urgency">
                    Urgency: {" "}
                    <input value={formData.urgency} onChange={handleChange} id="urgency" type="number" name="urgency" alt="level of priority" placeholder="Degree of urgency" required />
                </label>
                <br />
                <label htmlFor="message">
                    Message: {" "}
                    <textarea value={formData.message} onChange={handleChange} id="message" type="text" name="message" alt="message body" placeholder="Concerns, ideas, advices, ..." required 
                                    style={{ width: 300, height: 200 }}/>
                </label>
                <br />
                <label htmlFor="signed">
                    Signed: {" "}
                    <input value={formData.signed} onChange={handleChange} id="signed" type="textrea" name="signed" alt="user id" placeholder="User ID" />
                </label>
                <br />
                <label htmlFor="human">
                    Human Test: {" "}
                    {/* Notice: "checked" property here instead of "value" as this is of type checkbox */}
                    <input checked={formData.human} onChange={handleChange} id="human" type="checkbox" name="human" alt="are you real?" placeholder="Captcha" />

                    {/* dropdown menu of options */}
                    {/* <select onChange={handleChange} id="human" type="text" name="human" placeholder="Captcha">
                        <option value="false">BEEP BOOP R.O.B.O.T I A.M.🤖</option>
                        <option value="true">Let me in! I'm human!!🙂</option>
                    </select> */}
                </label>
                <br />
                {/* <button onClick={handleClick}>Send It!</button> */}
                <button type="submit">Send It!</button>
                    </form>
                ) : (
                    <h2>Loading ...</h2>
                )}
            </div>
        </>
    );
}

export default UpdateFormMsg;