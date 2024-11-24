// call upon axios library to fetch some data...fetch() built-in JavaScript feature works too
import axios from 'axios';

// data data from forum collection
async function getForum(){
    try {
        // path url to server-side
        let url = `http://localhost:3000/forums`;
        // accessing backend forums endpoint
        let res = await axios.get(url);
        // show the retrieved data
        return (res.data);
    } catch (err) {
        console.error(err);
    }
}

// create a comment to be posted to the backend
async function createMsg(formData){
    try {
        // path url to server-side
        let url = `http://localhost:3000/forums`;

        formData.message = formData.message + `✔️`;
        // accessing backend forums endpoint
        // let res = await axios.post(url, formData);
        let res = await fetch(url);
        let data = await res.json();
        // show the retrieved data
        // return (res.data);
        return(data);
    } catch (err) {
        console.error(err);
    }
}

// update a comment to the db
async function updateMsg(id, formData){
    try {
        let url = `http://localhost:3000/forums/${id}`;
        let res = await axios.put(url, formData);
        return (res.data);
    } catch (err) {
        console.error(err);
    }
}

// delete a comment from the db
async function deleteMsg(id, formData){
    try {
        let url = `http://localhost:3000/forums/${id}`;
        let res = await axios.delete(url, formData);
        // to indicate deletion processed through
        return true;
    } catch (err) {
        console.error(err);
    }
}
export { getForum, createMsg, updateMsg, deleteMsg };