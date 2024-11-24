import { useParams } from "react-router-dom"
// import useEffect() to fetch data from backend
// import useState() to hold state
import { useEffect, useState } from "react"
// <Link> component to re-direct to other pages
import { Link } from "react-router-dom";

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
                // sets "posts" state to retrieved data
                setPosts(data);
            } catch (err) {
                // console out error in encounter any
                console.error(err);
            }
        }
        // invoke above asynchronous fn
        getData();
    }, []); // dependencies list/array set to empty -- only render initially (once)
    
    return(
        <>
            <h1>Forum Page</h1>
            <div className="msg_board">
                {/* if posts exists, call JS array method .map() on it to create a new copy w/ wanted filters */}
                {posts ? posts.map((mention) => {
                    // destructure out wanted info
                    const { heading, urgency, message, signed } = mention;
                    return(
                        // populate page with fetched forum data & dynamically <Link> up each one to own page
                        <Link key={mention._id} to={`/forums/forum/${mention._id}`}>
                            <h3>{heading} [{urgency}]</h3>
                        </Link>
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