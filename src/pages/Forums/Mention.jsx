/* import useParams() hook to access URL parameters, particularly for dynamic routes */
import { useParams } from "react-router-dom";
// useEffect() hook to make API call 
// useState() hook to hold state
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function Mention(){
    // destructure to pull out params (:id) from  obj --- dynamic route '/literary_works/literary_work/:id'
    const { id } = useParams();
    
    // initialize state "info" for backend data 
    const [info, setInfo] = useState(null);

    const nav = useNavigate();

    // "async" function required to "async" fetch data from db
    async function getData(){
        try {
            // fetch get from HTTP GET one document by :id
            let res = await fetch(`http://localhost:3000/forums/forum/${id}`);
            // convert incoming data to JSON format
            let data = await res.json();    // this step automatically done if using axios
            // set state "info" from null to data being feed in
            setInfo(data);
        } catch (err) {
            console.error(err);
        }
    }
    // useEffect setup w/ arrow fn
    useEffect(() => {
        // invoke getData() fn to connect to custom server-side db & retrieve collections from db
        getData();
    }, []);   // dependencies list/array of [] means only run on initial render 

    // handler for delete functionality
    async function handleDelete(event){
        // redeclare state to new changes
        // Recall: Do NOT include {} -- from todo list lab: "DON'T else filter will encapsulate ALL posts at hand (delete all when pressed)"
        // setInfo(info.filter(post =>
        //     // if post's unique "_id" does NOT equal to backend, keep it
        //     post._id !== id
        // ));
        // prevent default behavior refresh
        event.preventDefault();

        try {
            // if the retrieved post has an unique "_id" (exists -- may be a little redundant but conditional needed)
            if(info._id){
                // delete this specific post from backend
                const res = await axios.delete(`http://localhost:3000/forums/${id}`);
                // indicate delete status to console
                console.log("Message successfully deleted", res);
                // since there's no more post at that endpoint, re-direct back to message board (rest of msgs)
                nav('/forums');
            }
            
        } catch (err) {
            console.error(err);
        }
    }
    
    // display when data do NOT exist
    const loading = () => {
        return(<h1>Loading (insert spinner)</h1>)
    }

    // loaded function when data is successfully fetched
    const loaded = () => {

        return(
            // functional components outside of <Routes> components DN change per page, each Route/page may change
            <>
                <div>
                    <h1>{info.heading}</h1>
                    <h3>{info.urgency}</h3>
                    <p>{info.message}</p>
                    <label id="delete-btn">
                        <input type="button" id="delete-btn" value="Delete🗑️" title="Are you sure?"
                            onClick={() => {
                                handleDelete(info._id);
                            }}
                                // dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})} 
                            // disabled={task.complete ? false : true} // disabled={!task.complete} works too
                            /* Delete btn only available for right owner login */
                        />
                    </label>
                </div>
            </>
        )
    }
    // ternary operator with && logical operator to conditionally render
    return info && info.heading ? loaded() : loading();
    
}