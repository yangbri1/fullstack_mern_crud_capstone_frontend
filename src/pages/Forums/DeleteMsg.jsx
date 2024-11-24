import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from 'axios';

function DeleteMsg(){
    const nav = useNavigate();
    const { id } = useParams;

    // const [formData, setFormData] = useState({
    //     heading: '',
    //     urgency: 1,
    //     message: '',
    //     signed: '',
    //     human: false
    // });
    // // using useEffect() hook to grab fetch data from backend
    // useEffect(() => {
    //     // "async" function to retrieve data from backend
    //     async function getData(){
    //         // // invoke findOneMsg() function to axios.get() one forum msg by unique "_id"
    //         // let data = await findOneMsg(id);
    //         // // 'axios' takes care of translating response to .json() format inherently, so here just set it to state
    //         // setFormData(data);
    //         try {
    //             let data = axios.get(`http://localhost:3000/forums/${id}`);
    //             setFormData(data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }
    //     // invoke getData() to actually fetch from db
    //     getData();
    // }, []); // dependencies list/array empty [] -- render only once

    // function handleChange(event){
    //     // destructure out some attributes from event.target
    //     const { name, type, value, checked } = event.target;
    //     // under the premise that <input> form type is of 'checkbox'
    //     if(type == 'checkbox'){
    //         setFormData({
    //             // spread operator to fill in gaps of info
    //             ...formData,
    //             // "human" key field takes a value "checked"
    //             human: checked
    //         });
    //     }
    //     // if the <input> form type is NOT 'checkbox'
    //     else{
    //         setFormData({
    //             ...formData,
    //             // each key field will be set to a "value"
    //             [name]: value
    //         });
    //     }
    // }

    async function handleSubmit(event){
        event.preventDefault();
        try {
            // let res = await updateMsg(id, formData);
            let res = await axios.delete(`http://localhost:3000/forums/${id}`, formData);
            console.log("Message deleted successfully", res);
            nav('/forums');
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <label htmlFor="delete-btn">
            <button onClick={handleSubmit}>Delete</button>
        </label>
    );
}

export default DeleteMsg;