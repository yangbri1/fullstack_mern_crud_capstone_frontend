// import useEffect() to fetch data from backend
// import useState() to hold state
import { useEffect, useState } from "react";
// <Link> component to re-direct to other pages
import { Link } from "react-router-dom";

// import { getForum } from "../../utilities/controllers.mjs";      // controller functions not working

import DeleteMsg from "./DeleteMsg";

/* Note: "Components (little pieces add to a page) are parts of a page (entire URL)" */
// create React functional component
export default function Forums(){

    // set state posts initially to null (NOT "null" (not a falsy value))
    let [posts, setPosts] = useState(null);

    useEffect(() => {
        async function getData(){
            try {
                // fetch data from forums endpoint in backend
                let res = await fetch(`http://localhost:3000/forums/`);
                // convert to usable JSON string format (obj)
                let data = await res.json();    // omit this step while using axios (inherently done)
                // sets "posts" state to retrieved data aka get ALL posts from backend
                setPosts(data);
            } catch (err) {
                // console out error in encounter any
                console.error(err);
            }
        }
        // invoke above asynchronous fn
        getData();
        // getForum();
    }, []); // dependencies list/array set to empty -- only render initially (once)
    
    return(
        <>
            <h1>Forum Page</h1>
            <div className="msg_board">
                {/* if posts exists, call JS array method .map() on it to create a new copy w/ wanted filters */}
                {posts ? posts.map((mention) => {
                {/* {getForum() ? getForum().map((mention) => { */}
                    // destructure out wanted info
                    const { heading, urgency, message, signed } = mention;
                    return(
                        <>
                            {/* // populate page with fetched forum data & dynamically <Link> up each one to own page */}
                            <Link key={mention._id} to={`/forums/forum/${mention._id}`}>
                                <h3>{heading} [{urgency}]</h3>
                            </Link>
                            <Link key={heading} to={`/forums/update_mention/${mention._id}`}>Edit</Link>
                            {/* <Link to={`/forums/delete_mention/${mention._id}`}>Delete</Link> */}
                            {/* DeleteMsg(mention._id); */}

                            <label id="delete-btn">
                                <input type="submit" id="delete-btn" value="Delete🗑️" title="Are you sure?"
                                    onClick={() => {
                                        return(posts.filter((msg) => 
                                            msg._id !== mention._id
                                        ))
                                    }}
                                        // dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})} 
                                    // https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/
                                    // Aside: DN know "disabled" could be written this way 
                                    // ternary operator to conditionally enable "Delete" functionality when task's complete status is true
                                    // Notice: "Delete" button availability depends on "Toggle" (green -- task.complete == true, red -- task.complete == false)
                                    // disabled={task.complete ? false : true} // disabled={!task.complete} works too
                                />
                            </label>
                        </>
                        /* Note: "Warning: Each child in a list should have a unique 'key' prop 
                         appeared when 2nd <Link> component was added... {heading} & {index} after setting .map(mention, index) DN work either" */
                        
                        // <>
                        //     <h2>{heading}</h2>
                        //     <h4>{message}</h4>
                        //     <p><b>Username</b>: <i>{signed}</i></p>
                        // </> 
                    );
                // if posts do NOT exist push out "Loading ..." indicator
                }) : <h1>Loading ...</h1>}
            </div>
        </>
    );
}